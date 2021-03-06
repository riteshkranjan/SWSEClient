import { Component, OnInit } from '@angular/core';
import {  TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {SearchserviceService} from '../Service/searchservice.service'
import { RouterModule, Routes, Router, Params, ActivatedRoute } from '@angular/router';
import {responselist} from './responselist';

@Component({
  selector: 'app-sales-orders',
  templateUrl: './sales-orders.component.html',
  styleUrls: ['./sales-orders.component.css']
})

export class SalesOrdersComponent implements OnInit {
  
 orderResult:  responselist;  
  private  offerResult:  Array<object> = [];
  selectedoffer;
  selectedrow;
  modalRef: BsModalRef;
  response;
  orderNumber;
  addedOrder;
  orderId;
  currentRow;

  ngOnInit() {
    this.routeFunction();
  }
 
  constructor(private modalService: BsModalService,private searchservice: SearchserviceService,private route: ActivatedRoute) {
   
  }
 
  public  getOrders(params:any){  
    this.searchservice.getOrders(params).subscribe((data: any) => {
        this.orderResult  = data;
        console.log(this.orderResult)
      
    });
    
  }

  public getOffers(){
    this.searchservice.getOffers().subscribe((data: any) => {
      this.offerResult  =  data;
      
  });
  }
  
  public routeFunction(){
    this.route.params.subscribe(params =>{
      let data: any = params['data'];
      let newData= JSON.parse(data);      
      this.getOrders(newData)
    })
  }
  public addOrders(){
    this.searchservice.getaddOrders( this.selectedoffer,this.orderResult.order.orderNumber).subscribe((data: any) => {
     this.routeFunction();    
  });
 
  }

  offerSelected(row:any,event:any){
    this.selectedoffer=row; 
    this.currentRow = row.name;
   
  }

  openModal(template: TemplateRef<any>) {
   
      this.getOffers();
      this.modalRef = this.modalService.show(template);
    
 }
  
  successAlert(){
    if(this.selectedoffer==undefined){
      alert("Select Offer");
    }
    else{
      alert("Offer Applied");
      this.addOrders();
      this.modalRef.hide(); 
    
    }
    
  }
 
  RowSelectedforOffer(row:any){    
    this.selectedrow=row; 
   
  }
  submitData(){
    this.addOrderItems();
   
  } 

  public addOrderItems(){
    this.searchservice.addOrderItem( this.selectedoffer,this.orderResult.order.orderNumber).subscribe((data: any) => {
     
     this.orderId =data;    
     alert('Order created successfully with order id:'+" " +this.orderId);
  });
 
  }
}
