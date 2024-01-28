import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Sendable } from '../interfaces/sendable';

type Result= 'ok'|'error';

@Injectable({
  providedIn: 'root'
})
export class InvoiceAPIService {
  baseUrl:string = `${environment.apiBaseUrl}`;
  apiUserName:string = `${environment.apiUserName}`;

  //invoiceList:Invoice[]=[];
  
  crypto:any = require('node:crypto');
  
  constructor(private httpClient:HttpClient) {
  }
  private getAuthKey(authKeyName:string){
    switch (authKeyName){
      case "faktura": return `${environment.authKeyFaktura}`;break;
      case "abonent": return `${environment.authKeyAbonent}`;break;
      case "rachunek":return `${environment.authKeyRachunek}`;break;
      case "wydatek":return `${environment.suthKeyWydatek}`;break;
    }
  }
  private createMessageHash(invoice:Sendable) {
    const message:string = invoice.url+environment.apiUserName+invoice.authKeyName+invoice.toString();
    const messageHash = this.crypto.createHmac('sha1',this.getAuthKey(invoice.authKeyName))
      .update(message)
      .digest('hex');
    return messageHash;
  }

  // addInvoice(invoice:Sendable):Observable<Sendable>{
  //   const headers = getFullHeaders(invoice);
    
  //   return this.httpClient.post<Sendable>(this.getFullUrl(invoice),JSON.stringify(invoice,this.invoiceReplacer()),headers);
  // }
  invoiceReplacer(): ((this: any, key: string, value: any) => any) | undefined {
    throw new Error('Method not implemented.');
  }
  getFullUrl(invoice: Sendable): string {
    return this.baseUrl+invoice.url;
  }

  getFullHeaders(invoice: Sendable) {
    return;
  }
  
}

