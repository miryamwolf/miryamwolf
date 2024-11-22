import { Component } from '@angular/core';
import { SchoolService } from '../../service/schools.service';
import { FormsModule } from '@angular/forms';
import { Student } from '../../class/Student';
import { StudentService } from '../../service/students.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-set',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './set.component.html',
  styleUrl: './set.component.css'
})
export class SetComponent {
constructor(public sc:SchoolService,public ss:StudentService,public ar:ActivatedRoute,public l:Location){
  ar.params.subscribe(
    x=>{
      this.id = x['ssid'];
      let s=ss.students.find(a=> a.id==this.id)
      if(s)
        ss.setStud = s
    }
  )
}
id: number = 0

save(){
  
  let index = this.ss.students.findIndex(a => a.id == this.ss.setStud.id)
      
      //הצבת הערכים החדשים
      this.ss.students[index]=this.ss.setStud
  this.ss.setStud = new Student()
  
}

choosePic(e:any) {
  this.ss.setStud.pic = e.srcElement.files[0].name
}
back(){
  this.l.back()
}
}
