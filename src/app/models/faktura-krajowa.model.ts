import { Formable } from "../interfaces/formable";
import { Sendable } from "../interfaces/sendable";

export class FakturaKrajowa implements Sendable{
    invoiceType:string = "faktura-krajowa";
    url:string="fakturakraj.json";
    authKeyName: string="faktura";
    zaplacono: Formable<number> = {
        key:"Zaplacono", 
        required:true, 
        default:null, 
        label:"Zapłacono",
        htmlType:"zaplacono", 
        htmlControlType:'textbox', 
        description:"kwota za fakturę", 
        options:null,
        isValid:(value)=>{return true;}
    }
    zaplaconoNaDokumencie: Formable<number> = {
        key:"ZaplaconoNaDocumencie", 
        required:true, 
        default:null, 
        label:"Zapłacono Na Dokumencie",
        htmlType:"zaplaconoNaDokumencie", 
        htmlControlType:'textbox', 
        description:"kwota zapłacono na dokumencie", 
        options:null,
        isValid:(value)=>{return false;}
    }

    getFields(): Formable<string | number | boolean>[] {
        return Object.values(this);
    }



}
