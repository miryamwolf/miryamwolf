import { Component } from '@angular/core';
import { SchoolService } from '../../service/schools.service';
import { FormsModule } from '@angular/forms';
import { Student } from '../../class/Student';

@Component({
  selector: 'app-set',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './set.component.html',
  styleUrl: './set.component.css'
})
export class SetComponent {
constructor(public sc:SchoolService){}
save(){
  
  let index = this.sc.students.findIndex(a => a.id == this.sc.setStud.id)
      debugger
      //הצבת הערכים החדשים
  this.sc.students[index] = this.sc.setStud
  this.sc.setStud = new Student()
  this.sc.set=true
}
choosePic(e: any) {
  this.sc.setStud.pic = e.srcElement.files[0].name
}
}
