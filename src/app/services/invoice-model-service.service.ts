import { Injectable } from '@angular/core';
import { Formable } from '../interfaces/formable';
import { FakturaKrajowa } from '../models/faktura-krajowa.model';
import { Sendable } from '../interfaces/sendable';
import { Observable, Subscriber, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InvoiceModelServiceService {
  invoices:Sendable[]=[];
  constructor() { }
  getInvoiceByType(invoiceType:string):Observable<Formable<string|number|boolean>[]|null>{
    switch (invoiceType){
      case "faktura-krajowa":{
          
          const invoice = new FakturaKrajowa();
          return of(invoice.getFields());
          //this.invoices.push(new FakturaKrajowa());
          //return this.invoices[this.invoices.length].getFields();
          //return new Observable((observer)=>{observer.next(invoice.getFields())});
          break;
        }
      default: {return of(null);}
    }
  }
}
