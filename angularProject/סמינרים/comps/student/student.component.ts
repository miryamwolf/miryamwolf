import { Component } from '@angular/core';
import { Student } from '../../class/Student';
import { School } from '../../class/School';

import { SchoolService } from '../../service/schools.service';
import { StudentService } from '../../service/students.service';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  constructor(public sc:SchoolService,public ss:StudentService){}
  
  moreD(s:Student)
  {
    this.ss.newS
     this.sc.stud={...s}
    this.sc.details=false
   // let index = this.sc.students.findIndex(a => a.id == this.sc.stud.id)
    
  }
  close(){
    this.sc.details=true
  }
set(set:Student){
  this.sc.setStud={...set}
  this.sc.set=false
  
}

}