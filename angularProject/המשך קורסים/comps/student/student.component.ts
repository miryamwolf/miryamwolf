import { Component } from '@angular/core';
import { Student } from '../../class/Student';
import { School } from '../../class/School';

import { SchoolService } from '../../service/schools.service';
import { StudentService } from '../../service/students.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  constructor(public sc:SchoolService,public ss:StudentService,
    public route:Router){}
  
  moreD(s:Student){
    this.route.navigate([`./students/details/${s.id}`])
  }
  set(s:Student){
    this.route.navigate([`./set/${s.id}`])
  }

}