import { Component, OnInit } from '@angular/core';
import { Sendable } from '../../interfaces/sendable';
import { InvoiceAPIService } from '../../services/invoice-api.service';
import { InvoiceDetailComponent } from '../invoice-detail/invoice-detail.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [InvoiceDetailComponent,CommonModule,RouterModule],
  templateUrl: './invoice-list.component.html',
  styleUrl: '../../../assets/styles/styles.scss',
 
})
export class InvoiceListComponent implements OnInit {

  invoiceList:Sendable[]=[];
  constructor(private ias:InvoiceAPIService){}
  ngOnInit(){
    this.ias.getInvoiceListByType("faktura-krajowa",true).subscribe({
      next: (value: Sendable[]) => {
        if (value){
          console.log("loading invoice list");
          console.log(value);
          this.invoiceList = value;}
        else{console.log("loaded null invoice");}
      },
      error: error=>{
        console.log("error loading invoice model");
      }
  });

  console.log(this.invoiceList);
  }


}
