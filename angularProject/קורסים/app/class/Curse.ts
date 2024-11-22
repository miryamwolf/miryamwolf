//קוד, שם החוג, שם המורה, מספר מקומות שנותרו, מחיר, האם זהו חוג חדש מהשנה?, תמונה (ניתוב).
export class Curse{
    constructor(public code?:number,public Cname?:string,public Tname?:string,public seets:number=15,public price?:number,public newCY?:boolean,public pic?:string){}
}