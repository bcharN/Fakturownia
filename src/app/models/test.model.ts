import { Formable } from "../interfaces/formable";
import { Sendable } from "../interfaces/sendable";

export class FakturaKrajowa implements Sendable{
    invoiceType:string = "faktura-krajowa";
    url:string="fakturakraj.json";
    authKeyName: string="faktura";

    
    public fields:Formable<number|string|boolean>[] = [
        {   
            value:null,
            key:"Zaplacono", 
            required:true,
            default:null, 
            
            validationRequired:true, 
            label:"Zapłacono",
            htmlType:"number", 
            htmlControlType:'textbox', 
            description:"kwota za fakturę", 
            options:null,
            //isValid:(value)=>{return true;}
        } as Formable<number>,
        {
            value:null,
            key:"ZaplaconoNaDocumencie", 
            validationRequired:true, 
            required:true,
            default:null, 
            label:"Zapłacono Na Dokumencie",
            htmlType:"number", 
            htmlControlType:'textbox', 
            description:"kwota zapłacono na dokumencie", 
            options:null,
            isValid:()=>{return false;}
        } as Formable<number>,
        {
            value:null,
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
    setValues(values:any):void {
        for (const field of this.fields){
            const convVal = Number(values[field.key]);
            field.value  = isNaN(convVal) ? values[field.key] : convVal;
        }
    }
    getSendableObject(): object {
        const result = {};
        for (const field of this.fields){
            //console.log({key:field.key,value:field.value})
            Object.defineProperty(result, field.key,{value:field.value,enumerable:true});
        }
        //console.log(result);
        return result;
    }
    clear():void{
        for(const field of this.fields){
            field.value=null;
        }
    }


}
