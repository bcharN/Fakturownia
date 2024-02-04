import { Formable } from "../interfaces/formable";
import { Sendable } from "../interfaces/sendable";

export class FakturaKrajowa implements Sendable{
    invoiceType:string = "faktura-krajowa";
    url:string="fakturakraj.json";
    authKeyName: string="faktura";

    
    private fields:Formable<number|string|boolean>[] = [
        {
            key:"Zaplacono", 
            validationRequired:true, 
            required:true,
            default:null, 
            label:"Zapłacono",
            htmlType:"zaplacono", 
            htmlControlType:'textbox', 
            description:"kwota za fakturę", 
            options:null,
            //isValid:(value)=>{return true;}
        } as Formable<number>,
        {
            key:"ZaplaconoNaDocumencie", 
            validationRequired:true, 
            required:true,
            default:null, 
            label:"Zapłacono Na Dokumencie",
            htmlType:"zaplaconoNaDokumencie", 
            htmlControlType:'textbox', 
            description:"kwota zapłacono na dokumencie", 
            options:null,
            isValid:()=>{return false;}
        } as Formable<number>,
        {
            key:"dropdown test",
            validationRequired:false,
            required:false,
            default:null,
            label:"dropdown test",
            htmlType:"text",
            htmlControlType:"dropdown",
            options:[{key:"one",value:"hello"},{key:"two",value:"world"}],
        }
    ]
    getFields(): Formable<string | number | boolean>[] {
        return this.fields;
    }



}
