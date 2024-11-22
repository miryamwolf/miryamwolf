import { Component } from '@angular/core';
import { StudentService } from '../../service/students.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
constructor(public ss:StudentService,public ar:ActivatedRoute,public l:Location){
  ar.params.subscribe(
    x=>{
      this.id = x['sid'];
      let s=ss.students.find(a=> a.id==this.id)
      if(s)
        ss.currentP = s
    }
  )
}
id: number = 0

close(){
  this.l.back()
}
}
