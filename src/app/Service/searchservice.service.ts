import { Injectable } from '@angular/core';
import {Http,Response,URLSearchParams, RequestOptions} from '@angular/http';
import {HttpClientJsonpModule,HttpHeaders,HttpClientModule,HttpClient} from "@angular/common/http";
import { map, catchError   } from 'rxjs/operators'
import { Observable, EMPTY, throwError } from 'rxjs';

/*
const ParseHeaders = {
  headers: new HttpHeaders ({
   'responseType'  : 'text',
   'Content-Type': 'application/json'
  })
 };

 */
 

@Injectable({
  providedIn: 'root'
})

export class SearchserviceService {
  
  API_URL  =  './data';
  ORDER_URL = './order';
  OFFER_URL = './offer';
  ADD_ORDER_URL='./addOrder';
  ADD_ORDER_ITEM ='./addOrderItem';
  constructor(private  httpClient:  HttpClient) {}  

  getContacts(params:any){     
      let  urlVal=this.API_URL+"/search/"+params['telNo']+"/"+params['billacntno']
      return  this.httpClient.get(`${urlVal}`);
  }

  getOrders(params:any){   
    let  urlVal=this.ORDER_URL+"/getAssetDetails/"+params['assetNumber'];   
    return  this.httpClient.get(`${urlVal}`);
  }

  getaddOrders(selectedOffer,orderNumber):Observable <any> {
    let  urlVal=this.ADD_ORDER_URL+"/generateOrderItem/"+orderNumber;           
     return this.httpClient.post(urlVal, selectedOffer, {'responseType'  : 'text'}).pipe(map(this.extractData)).pipe(catchError(this.handleError));
    
  }

  
  addOrderItem(selectedOffer,orderNumber):Observable <any> {
    let  urlVal=this.ADD_ORDER_URL+"/addOrderItem/"+orderNumber;           
     return this.httpClient.post(urlVal, selectedOffer, {'responseType'  : 'text'}).pipe(map(this.extractData)).pipe(catchError(this.handleError));
    
  }

  private extractData(res: Response) {    
    let body = res.toString(); 
    return body;
}
private handleError(error: any) { 
  let res = error.toString(); 
  return throwError(res);  
}

  getOffers(){
    let  urlVal=this.OFFER_URL+"/getAllOffers/";
    return  this.httpClient.get(`${urlVal}`);
  }

  
}