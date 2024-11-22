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
  students:Array<Student>=new Array<Student>(
    new Student(123456789,"מרים","כהן","025374859","1.jpg",this.schools[0]),
    new Student(185698547,"אלישבע","לוי","0296685785","2.jpg"),
    new Student(154788996,"תמר","פרידמן","025698547","3.jpg"),
    new Student(985471254,"יהודית","אדם","0259854747","4.jpg"),
   
) 
details:boolean=true
stud:Student=new Student()
setStud:Student=new Student()
set:boolean=true
  constructor() { }
    }
    