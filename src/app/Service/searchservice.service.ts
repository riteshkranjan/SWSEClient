import { Injectable } from '@angular/core';
import {Http,Response,URLSearchParams, RequestOptions} from '@angular/http';
import {HttpClientJsonpModule,HttpHeaders,HttpClientModule,HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators'

const ParseHeaders = {
  headers: new HttpHeaders ({
   'Content-Type'  : 'application/json'
  })
 };

@Injectable({
  providedIn: 'root'
})

export class SearchserviceService {
  
  API_URL  =  './data';
  ORDER_URL = './order';
  OFFER_URL = './offer';
  ADD_ORDER_URL='./addOrder';
  constructor(private  httpClient:  HttpClient) {}  

  getContacts(params:any){ 
      console.log(params)    
      let  urlVal=this.API_URL+"/search/"+params['telNo']+"/"+params['billacntno']
      return  this.httpClient.get(`${urlVal}`);
  }

  getOrders(params:any){
    console.log(params)
    let  urlVal=this.ORDER_URL+"/getAssetDetails/"+params['assetNumber'];   
    return  this.httpClient.get(`${urlVal}`);
  }

  getaddOrders(selectedOffer,orderNumber){
    let  urlVal=this.ADD_ORDER_URL+"/addOrderItem/"+orderNumber;    
    this.httpClient.post(urlVal,selectedOffer,ParseHeaders).subscribe((res) => {     
     });
  }

  getOffers(){
    let  urlVal=this.OFFER_URL+"/getAllOffers/";
    return  this.httpClient.get(`${urlVal}`);
  }

  
}