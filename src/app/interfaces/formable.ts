export interface Formable<Type> {
    
    value?:Type|null, //typ w JSON
    key:string, //nazwa w JSON
    required?:boolean, //wymagane
    
    default?:Type|null,  //wartosc domyslna
    label?:string,   //metka
    
    htmlType?:string, //typ pola html
    htmlControlType?:string, //typ controlki html
    
    description?:string, //dodatkowy opis
    options?: {key:string, value:string}[]|null, //dodatkowe opcje przy dropdown boxie

    isValid?(value:Type):boolean, //funkcja ktora ma sprawdzic poprawnosc danej kontrolki
    
}