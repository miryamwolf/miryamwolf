import { School } from "./School";

export class Student{
    constructor(public id?:number,public fName?:string,public lName?:string,public phone?:string,public pic?:string,public school?:School){}
}