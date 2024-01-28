import { Formable } from "./formable";

export interface Sendable {
    readonly url:string,
    readonly authKeyName:string,
    readonly invoiceType:string,
    getFields():Formable<string|number|boolean>[],

}
