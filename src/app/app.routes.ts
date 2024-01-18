import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { CreateInvoiceComponent } from './components/create-invoice/create-invoice.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InvoiceDetailComponent } from './components/invoice-detail/invoice-detail.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'create-invoice',
        component: CreateInvoiceComponent
    },
    {
        path: 'invoice-list',
        component: InvoiceListComponent
    },
    {
        path: 'invoice-detail',
        component: InvoiceDetailComponent
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    }
];
