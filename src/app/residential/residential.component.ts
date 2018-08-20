import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes, Router, Params, ActivatedRoute } from '@angular/router';
import{ Http,Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { SearchComponent } from '../search/search.component';
import {SearchserviceService} from '../Service/searchservice.service'


@Component({
  selector: 'app-residential',
  templateUrl: './residential.component.html',
  styleUrls: ['./residential.component.css']
})
export class ResidentialComponent implements OnInit {

  modifyButtonFlag:boolean=false;
  errorMsg: String ="";
  private  searchResult:  Array<object> = [];
  selectedrow;
  currentRow;
 spinnerFlag:boolean = false;
  constructor(private searchservice: SearchserviceService,private route: ActivatedRoute,private router: Router) {     
    
   }

  ngOnInit() {   
 
    this.route.params.subscribe(params =>
      this.getContacts(params) 
      
      );
  } 
  
  public  getContacts(params:any){  
    this.searchservice.getContacts(params).subscribe((data: any) => {
        this.searchResult  =  data;
        console.log(data);
        this.spinnerFlag=true;
    });
  }
 
  RowSelected(row:any,event:any,index){
    this.selectedrow=row; 
    this.currentRow =index;
  
  }

  loadMyOrderScreen(selectedrow){
    if(selectedrow == undefined){
      this.modifyButtonFlag=false;
      this.errorMsg="Select the row to modify";
    }
    else{
      this.modifyButtonFlag=true;
      this.errorMsg="";
    this.router.navigate(['/salesorders',{data: JSON.stringify(selectedrow)}]);
    }
  }
}
