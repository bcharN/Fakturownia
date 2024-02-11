// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceAPIService } from './services/invoice-api.service';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Add HttpClientModule if you use HttpClient
  ],
  providers: [
InvoiceAPIService // Add your services here
  ],
  
})
export class AppModule { }
