import { Formable } from "./formable";

export interface Sendable {
    readonly url:string,
    readonly authKeyName:string,
    readonly invoiceType:string,

    invoiceEntry:Formable<string|number|boolean>[],
    counterparty:Formable<string|number|boolean>[],
    fields:Formable<string|number|boolean>[],
    //invoiceEntries:Formable<string|number|boolean>[],
    getFields():Formable<string|number|boolean>[],
    getEntry():Formable<string|number|boolean>[],
    getCounterparty():Formable<string|number|boolean>[],
    setFields(values:any):void;
    setEntry(values:any):void;
    setCounterparty(values:any):void;
    getSendableObject():object;
    clear():void;
}
