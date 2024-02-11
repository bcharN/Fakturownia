/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { type Formable } from '../interfaces/formable'
import { type Sendable } from '../interfaces/sendable'

export class FakturaKrajowa implements Sendable {
  invoiceType: string = 'faktura-krajowa'
  url: string = 'fakturakraj.json'
  authKeyName: string = 'faktura'

  public fields: Array<Formable<number | string | boolean>> = [
    {
      value: null,
      key: 'Zaplacono',
      required: true,
      default: null,
      validationRequired: true,
      label: 'Zapłacono',
      htmlType: 'number',
      htmlControlType: 'textbox',
      description: 'kwota za fakturę',
      options: null
      // isValid:(value)=>{return true;}
    } as Formable<number>,
    {
      value: null,
      key: 'ZaplaconoNaDocumencie',
      validationRequired: true,
      required: true,
      default: null,
      label: 'Zapłacono Na Dokumencie',
      htmlType: 'number',
      htmlControlType: 'textbox',
      description: 'kwota zapłacono na dokumencie',
      options: null,
      isValid: () => { return false }
    } as Formable<number>,
    {
      value: null,
      key: 'LiczOd',
      validationRequired: false,
      required: true,
      default: null,
      label: 'Licz od brutto czy od netto: ',
      htmlType: 'text',
      htmlControlType: 'dropdown',
      options: [{ key: 'NET', value: 'netto' }, { key: 'BRT', value: 'brutto' }]
    } as Formable<string>,
    {
      value: null,
      key: 'NumerKontaBankowego',
      validationRequired: true,
      required: false,
      default: null,
      label: "Numer konta bankowego, lub 'BRAK' jeśli ma nie być wyświetlany",
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: 'numer konta bankowego firmy',
      options: null,
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'SplitPayment',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Mechanizm Podzielonej Płatności',
      htmlType: 'text',
      htmlControlType: 'dropdown',
      description: 'Mechanizm Podzielonej Płatności',
      options: [{ key: false, value: 'Nie' }, { key: true, value: 'Tak' }],
      isValid: () => { return false }
    } as Formable<boolean>,
    {
      value: null,
      key: 'DataWystawienia',
      validationRequired: true,
      required: true,
      default: null,
      label: 'Data wystawienia faktury',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: 'poprawna data wystawienia faktury',
      options: null,
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'MiejsceWystawienia',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Miejsce wystawienia faktury',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: 'miejsce wystawienia faktury',
      options: null,
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'DataSprzedazy',
      validationRequired: true,
      required: true,
      default: null,
      label: 'Data sprzedaży towaru lub usługi',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: 'data sprzedaży towaru lub usługi',
      options: null,
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'FormatDatySprzedazy',
      validationRequired: true,
      required: true,
      default: null,
      label: 'Format daty sprzedaży',
      htmlType: 'text',
      htmlControlType: 'dropdown',
      description: 'format daty sprzedaży',
      options: [{ key: 'DZN', value: 'dzienny' }, { key: 'MSC', value: 'miesięczny' }],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'TerminPlatnosci',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Termin płatności za towar lub usługę',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: 'termin płatności za towar lub usługę. Format RRRR-MM-DD',
      options: null,
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'SposobZaplaty',
      validationRequired: true,
      required: true,
      default: null,
      label: 'Sposób zapłaty za towar lub usługę',
      htmlType: 'text',
      htmlControlType: 'dropdown',
      description: 'Sposób zapłaty za towar lub usługę',
      options: [
        { key: 'GTK', value: 'gotówka' },
        { key: 'POB', value: 'za pobraniem' },
        { key: 'PRZ', value: 'przelew' },
        { key: 'KAR', value: 'karta' },
        { key: 'PZA', value: 'polecenie zapłaty' },
        { key: 'CZK', value: 'czek' },
        { key: 'KOM', value: 'kompensata' },
        { key: 'BAR', value: 'barter' },
        { key: 'DOT', value: 'DotPay' },
        { key: 'PAL', value: 'PayPal' },
        { key: 'ALG', value: 'PayU' },
        { key: 'P24', value: 'Przelewy24' },
        { key: 'TPA', value: 'tpay.com' },
        { key: 'ELE', value: 'płatność elektroniczna' }
      ],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'NazwaSeriiNumeracji',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Nazwa serii numeracji dla faktury',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: null,
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'NazwaSzablonu',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Nazwa szablonu wystawianej faktury',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: null,
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'RodzajPodpisuOdbiorcy',
      validationRequired: true,
      required: true,
      default: null,
      label: 'Rodzaj podpisu odbiorcy',
      htmlType: 'text',
      htmlControlType: 'dropdown',
      description: '',
      options: [
        { key: 'OUP', value: 'osoba upoważniona do otrzymania faktury VAT' },
        { key: 'UPO', value: 'upoważnienie' },
        { key: 'BPO', value: 'bez podpisu odbiorcy' },
        { key: 'BWO', value: 'bez podpisu odbiorcy i dostawcy' }
      ],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'PodpisOdbiorcy',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Podpis odbiorcy',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: null,
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'PodpisWystawcy',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Podpis wystawcy',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: null,
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'Uwagi',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Uwagi',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: null,
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'WidocznyNumerGios',
      validationRequired: true,
      required: true,
      default: null,
      label: 'Widoczność numeru GIOŚ na fakturze',
      htmlType: 'text',
      htmlControlType: 'dropdown',
      description: '',
      options: [{ key: false, value: 'Nie' }, { key: true, value: 'Tak' }],
      isValid: () => { return false }
    } as Formable<boolean>,
    {
      value: null,
      key: 'WidocznyNumerBdo',
      validationRequired: true,
      required: true,
      default: null,
      label: 'Widoczność numeru BDO na fakturze',
      htmlType: 'text',
      htmlControlType: 'dropdown',
      description: '',
      options: [{ key: false, value: 'Nie' }, { key: true, value: 'Tak' }],
      isValid: () => { return false }
    } as Formable<boolean>,
    {
      value: null,
      key: 'Numer',
      validationRequired: true,
      required: true,
      default: null,
      label: 'Numer wystawianej faktury',
      htmlType: 'number',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<number>,
    {
      value: null,
      key: 'IdentyfikatorKontrahenta',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Identyfikator kontrahenta',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'NIPKontrahenta',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Numer NIP kontrahenta',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<string>]

  public invoiceEntry: Array<Formable<string | number | boolean>> = [
    {
      value: null,
      key: 'StawkaVat',
      validationRequired: true,
      required: true,
      default: null,
      label: 'Stawka VAT pozycji faktury',
      htmlType: 'text',
      htmlControlType: 'dropdown',
      description: '',
      options: [{ key: 0.00, value: '0.00' }, { key: 0.05, value: '0.05' }, { key: 0.08, value: '0.08' }, { key: 0.23, value: '0.23' }],
      isValid: () => { return false }
    } as Formable<number>,
    {
      value: null,
      key: 'Ilosc',
      validationRequired: true,
      required: true,
      default: null,
      label: 'Ilość towaru lub usługi',
      htmlType: 'number',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<number>,
    {
      value: null,
      key: 'CenaJednostkowa',
      validationRequired: true,
      required: true,
      default: null,
      label: 'Cena jednostkowa towaru lub usługi',
      htmlType: 'number',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<number>,
    {
      value: null,
      key: 'NazwaPelna',
      validationRequired: true,
      required: true,
      default: null,
      label: 'Pełna nazwa towaru lub usługi',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'Jednostka',
      validationRequired: true,
      required: true,
      default: null,
      label: 'Jednostka towaru lub usługi',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'PKWiU',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Symbol PKWiU usługi lub CN towaru',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'GTU',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Symbol GTU (grupy towarowo-usługowej)',
      htmlType: 'text',
      htmlControlType: 'dropdown',
      description: '',
      options: [
        { key: 'BRAK', value: 'BRAK' },
        { key: '01', value: '01' },
        { key: '02', value: '02' },
        { key: '03', value: '03' },
        { key: '04', value: '04' },
        { key: '05', value: '05' },
        { key: '06', value: '06' },
        { key: '07', value: '07' },
        { key: '08', value: '08' },
        { key: '09', value: '09' },
        { key: '10', value: '10' },
        { key: '11', value: '11' },
        { key: '12', value: '12' },
        { key: '13', value: '13' }
      ],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'TypStawkiVat',
      validationRequired: true,
      required: true,
      default: null,
      label: 'Typ stawki VAT obowiązującej dla towaru lub usługi',
      htmlType: 'text',
      htmlControlType: 'dropdown',
      description: '',
      options: [{ key: 'PRC', value: 'procentowa' }, { key: 'ZW', value: 'zwolniona' }],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'rabat',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Wysokość rabatu podawana w procentach',
      htmlType: 'number',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<number>
  ]

  public counterparty: Array<Formable<string | number | boolean>> = [
    {
      value: null,
      key: 'Nazwa',
      validationRequired: true,
      required: true,
      default: null,
      label: 'Nazwa firmy kontrahenta',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'Nazwa2',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Nazwa firmy kontrahenta',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'Identyfikator',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Identyfikator kontrahenta',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'PrefiksUE',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Prefiks UE kontrahenta',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'NIP',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Numer NIP kontrahenta',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'Ulica',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Ulica siedziby kontrahenta',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'KodPocztowy',
      validationRequired: true,
      required: true,
      default: null,
      label: 'Kod pocztowy kontrahenta',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'Kraj',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Kraj siedziby kontrahenta',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'KodKraju',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Kod kraju (3166-1 alfa-2) siedziby kontrahenta',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'Miejscowosc',
      validationRequired: true,
      required: true,
      default: null,
      label: 'Miejscowość siedziby firmy kontrahenta',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'email',
      validationRequired: true,
      required: false,
      default: null,
      label: 'adres e-mail kontrahenta',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'Telefon',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Numer telefonu kontrahenta',
      htmlType: 'text',
      htmlControlType: 'textbox',
      description: '',
      options: [],
      isValid: () => { return false }
    } as Formable<string>,
    {
      value: null,
      key: 'OsobaFizyczna',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Osoba fizyczna (czy kontrahent jest osobą fizyczną)',
      htmlType: 'text',
      htmlControlType: 'dropdown',
      description: '',
      options: [{ key: false, value: 'Nie' }, { key: true, value: 'Tak' }],
      isValid: () => { return false }
    } as Formable<boolean>,
    {
      value: null,
      key: 'JestOdbiorca',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Jest odbiorcą (czy kontrahent jest odbiorcą)',
      htmlType: 'text',
      htmlControlType: 'dropdown',
      description: '',
      options: [{ key: false, value: 'Nie' }, { key: true, value: 'Tak' }],
      isValid: () => { return false }
    } as Formable<boolean>,
    {
      value: null,
      key: 'JestDostawca',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Jest dostawcą (czy kontrahent i sprzedawca są ze sobą powiązani)',
      htmlType: 'text',
      htmlControlType: 'dropdown',
      description: '',
      options: [{ key: false, value: 'Nie' }, { key: true, value: 'Tak' }],
      isValid: () => { return false }
    } as Formable<boolean>,
    {
      value: null,
      key: 'PodmiotPowiazany',
      validationRequired: true,
      required: false,
      default: null,
      label: 'Jest powiązany (czy kontrahent jest podmiotem powiązanym ze sprzedawcą)',
      htmlType: 'text',
      htmlControlType: 'dropdown',
      description: '',
      options: [{ key: false, value: 'Nie' }, { key: true, value: 'Tak' }],
      isValid: () => { return false }
    } as Formable<boolean>
  ]

  getFields (): Array<Formable<string | number | boolean>> {
    return this.fields
  }

  getEntry (): Array<Formable<string | number | boolean>> {
    return this.invoiceEntry
  }

  getCounterparty (): Array<Formable<string | number | boolean>> {
    return this.counterparty
  }

  setFields (values: any): void {
    for (const field of this.fields) {
      const inputVal = values[field.key]
      const convToNumVal = Number(inputVal)
      // const boolVal = Boolean(values[field.key])
      field.value = isNaN(convToNumVal) ? values[field.key] : convToNumVal

      //
      // = ((inputVal == "true" || inputVal == "false") && field.valType == boolean) ? boolVal : normalVal
    }
  }

  setEntry (values: any): void {
    for (const entry of this.invoiceEntry) {
      const inputVal = values[entry.key]
      const convToNumVal = Number(inputVal)
      // const boolVal = Boolean(values[field.key])
      entry.value = isNaN(convToNumVal) ? values[entry.key] : convToNumVal
    }
  }

  clearEntry (): void {
    for (const entry of this.invoiceEntry) {
      entry.value = null
    }
  }

  setCounterparty (values: any): void {
    for (const field of this.counterparty) {
      const inputVal = values[field.key]
      const convToNumVal = Number(inputVal)
      // const boolVal = Boolean(values[field.key])
      field.value = isNaN(convToNumVal) ? values[field.key] : convToNumVal
    }
  }

  getSendableObject (): object {
    const result = { pozycje: {}, kontrahent: {} }
    for (const field of this.fields) {
      // console.log({key:field.key,value:field.value})
      Object.defineProperty(result, field.key, { value: field.value, enumerable: true })
    }
    for (const field of this.invoiceEntry) {
      // console.log({key:field.key,value:field.value})
      Object.defineProperty(result.pozycje, field.key, { value: field.value, enumerable: true })
    }
    Object.defineProperty(result, 'kontrahent', { value: {}, enumerable: true })
    for (const field of this.counterparty) {
      // console.log({key:field.key,value:field.value})
      Object.defineProperty(result.kontrahent, field.key, { value: field.value, enumerable: true })
    }
    // console.log(result);
    return result
  }

  clear (): void {
    for (const field of this.fields) {
      field.value = null
    }
    for (const field of this.invoiceEntry) {
      field.value = null
    }
    for (const field of this.counterparty) {
      field.value = null
    }
  }
}
