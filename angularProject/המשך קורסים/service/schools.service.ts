import { Injectable } from "@angular/core";
import { School } from "../class/School";
import { Student } from "../class/Student";

@Injectable({
    providedIn: 'root'
  })
  export class SchoolService {
   // צרי מחלקת סמינר – קוד, שם הסמינר, טלפון ליצירת קשר.

    schools:Array<School>=new Array<School>(
      new School(100,"סניף","025608258"),
      new School(101,"ישן","025469857"),
      new School(102,"חדש","025698475"),
      new School(103,"מעלות","025968958"),
  
  ) 


  constructor() { }
    }
    