import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmptyError, NotFoundError, Observable, concatAll, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Sendable } from '../interfaces/sendable';
import crypto from 'crypto';
import { InvoiceModelServiceService } from './invoice-model-service.service';
import { subscribe } from 'diagnostics_channel';
import { error } from 'console';


@Injectable({
  providedIn: 'root'
})
export class InvoiceAPIService {
  baseUrl: string = `${environment.apiBaseUrl}`;
  apiUserName: string = `${environment.apiUserName}`;

  // crypto = require('crypto');
  //invoiceList:Invoice[]=[]; 

  invoiceCache:Sendable[]=[];
  addedInvoice:boolean=false;
  constructor(private httpClient: HttpClient, private ims:InvoiceModelServiceService) {
  }
  private getAuthKey(authKeyName: string) {
    switch (authKeyName) {
      case "faktura": return `${environment.authKeyFaktura}`; break;
      case "abonent": return `${environment.authKeyAbonent}`; break;
      case "rachunek": return `${environment.authKeyRachunek}`; break;
      case "wydatek": return `${environment.suthKeyWydatek}`; break;
      default: throw NotFoundError;
    }
  }
  // }
  // private createMessageHash(invoice:Sendable) {
  //   const message:string = invoice.url+environment.apiUserName+invoice.authKeyName+invoice.toString();
  //   const messageHash = this.crypto.createHmac('sha1',this.getAuthKey(invoice.authKeyName))
  //     .update(message)
  //     .digest('hex');
  //   return messageHash;
  // }

  sendInvoice(invoice: Sendable): Observable<object> {
    this.invoiceCache.push(invoice);
    this.addedInvoice=true;
    const fullUrl = this.getFullUrl(invoice);
    const body = invoice.getSendableObject();//JSON.stringify(invoice.getSendableObject());
    const headers = this.getFullHeaders(fullUrl, invoice, body);
    console.log("inside api service: ");
    console.log(invoice.getSendableObject());
    console.log(`${environment.production}`);
    console.log(fullUrl+" ;;; "+headers.getAll('Accept')+" "+headers.getAll('Content-type')+" "+headers.getAll('Authentication')+" ;;; ");
    console.log(JSON.stringify(body));
    console.log("sending from service")
    return this.httpClient.post<object>(fullUrl, body, { headers });
  }


  getInvoiceByType(invoiceType:string):Observable<Sendable>{
    const obsErr = new Observable<Sendable>((subscriber)=>{return subscriber.error});
    let invoice!:Sendable;
    this.ims.getInvoiceByType(invoiceType)
      .subscribe({
        next: (value: Sendable|null) => {
          if (value){
            invoice = value;}
          else{console.log("loaded null invoice");}
        },
        error: error=>{
          console.log("error loading invoice model into service");
          return obsErr;
        }
      });
    const fullUrl = this.getFullUrl(invoice)
    const headers = this.getFullHeaders(fullUrl,invoice,{});
    this.httpClient.get<object>(fullUrl,{headers, responseType:'json'}).subscribe({
      next:(data)=>{invoice.setFields(data)},
      error:(err)=>{console.log("error getting data from api",`${err}`); return obsErr}
    });
    return of(invoice);
    
    // let invoice!:Sendable;
    // if (invoiceObs){
    //   invoice = invoiceObs.subscribe((invoice)=>{return invoice;})
    // }
    // else {return obsErr;}
  }
  getInvoiceListByType(invoiceType:string, fromCache:boolean):Observable<Sendable[]>{
    console.log("added invoice to cache in api service: "+`${this.addedInvoice}`)
    if(fromCache){return of(this.invoiceCache)}
    
    const obsErr = new Observable<Sendable>((subscriber)=>{return subscriber.error});
    let invoice!:Sendable;
    let rawRespData!:object;
    let invoices!:Sendable[];
    this.ims.getInvoiceByType(invoiceType)
      .subscribe({
        next: (value: Sendable|null) => {
          if (value){
            invoice = value;}
          else{console.log("loaded null invoice");}
        },
        error: error=>{
          console.log("error loading invoice model into service");
          return obsErr;
        }
      });
    const fullUrl = this.getFullUrl(invoice)
    const headers = this.getFullHeaders(fullUrl,invoice,{});
    this.httpClient.get<object>(fullUrl,{headers, responseType:'json'}).subscribe({
      next:(data)=>{rawRespData=data;console.log(JSON.stringify(data))},
      error:(err)=>{console.log("error getting data from api",`${err}`); return obsErr}
    });

    for (const inv in rawRespData){
      invoice.clear();
      invoice.setFields(inv);
      invoices.push(invoice);
    }
    return of(invoices);
    
  }
  // addInvoice(invoice:Sendable):Observable<Sendable>{
  //   const headers = getFullHeaders(invoice);

  //   return this.httpClient.post<Sendable>(this.getFullUrl(invoice),JSON.stringify(invoice,this.invoiceReplacer()),headers);
  // }

  getFullUrl(invoice: Sendable): string {
    return this.baseUrl + invoice.url;
  }

  private getFullHeaders(fullUrl: string, invoice: Sendable, body: object): HttpHeaders {
    const message = fullUrl + this.apiUserName + invoice.authKeyName + JSON.stringify(body);
    // const messageHash = crypto.createHmac('sha1', this.getAuthKey(invoice.authKeyName))
    //   .update(message)
    //   .digest('hex');
    const messageHash = 1234;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-type': 'application/json; charset=UTF-8',
      'Authentication': 'IAPIS user=' + this.apiUserName + ', hmac-sha1=' + messageHash
    })
    return headers;
  }

}

