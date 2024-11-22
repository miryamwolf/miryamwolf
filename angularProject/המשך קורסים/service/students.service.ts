import { Injectable } from "@angular/core";
import { Student } from "../class/Student";
import { SchoolService } from "./schools.service";


@Injectable({
    providedIn: 'root'

  })
  export class StudentService {
  constructor(public s:SchoolService){
    
      this.students.push(new Student(123456789,"מרים","כהן","025374859","8.jpg",this.s.schools[0]))
      this.students.push(new Student(185698547,"אלישבע","לוי","0296685785","2.jpg"))
      this.students.push(new Student(154788996,"תמר","פרידמן","025698547","3.jpg"))
      this.students.push(new Student(985471254,"יהודית","מילר","0259854747","5.jpg"))
  }
students:Array<Student>=new Array<Student>()
detailsS:Student=new Student()
setStud:Student=new Student()
currentP:Student=new Student()
}
     