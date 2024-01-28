import { Injectable } from '@angular/core';
import { Formable } from '../interfaces/formable';
import { FakturaKrajowa } from '../models/faktura-krajowa.model';
import { Sendable } from '../interfaces/sendable';
import { Observable, Subscriber } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InvoiceModelServiceService {
  invoices:Sendable[]|null=null;
  constructor() { }
  getInvoiceByType(invoiceType:string):Formable<string|number|boolean>[]|null{
    switch (invoiceType){
      case "faktura-krajowa":{
          const invoice = new FakturaKrajowa();
          return invoice.getFields();
          //return new Observable((observer)=>{observer.next(invoice.getFields())});
          break;
        }
      default: {return null}
    }
  }
}
