import { Injectable } from "@angular/core";
import { Student } from "../class/Student";


@Injectable({
    providedIn: 'root'
  })
  export class StudentService {
   newS:Student=new Student()
  
  constructor() { }
 
     }
     