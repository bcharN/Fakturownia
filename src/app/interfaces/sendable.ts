import { type Formable } from './formable'

export interface Sendable {
  readonly url: string
  readonly authKeyName: string
  readonly invoiceType: string

  invoiceEntry: Array<Formable<string | number | boolean>>
  counterparty: Array<Formable<string | number | boolean>>
  fields: Array<Formable<string | number | boolean>>
  // invoiceEntries:Formable<string|number|boolean>[],
  getFields: () => Array<Formable<string | number | boolean>>
  getEntry: () => Array<Formable<string | number | boolean>>
  getCounterparty: () => Array<Formable<string | number | boolean>>
  setFields: (values: any) => void
  setEntry: (values: any) => void
  setCounterparty: (values: any) => void
  getSendableObject: () => object
  clear: () => void
}
