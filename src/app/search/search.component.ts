import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

//import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

   searchButtonFlag:boolean=false;
   errorMsg: String ="";
  constructor(private router: Router) { }
  private loadComponent = false;
  ngOnInit() {
  }
  searchButton(){
    alert("Serach button clicked")
  }
  loadMyChildComponent(telNo,billacntno){  
    if (telNo== undefined && billacntno == undefined) {
     this.searchButtonFlag=false;
     this.errorMsg="Input value required"
    }
    else{
      this.searchButtonFlag=true;
      this.errorMsg="";
     this.router.navigate(['/residential',{telNo,billacntno}]);
    
    }
  }

}
