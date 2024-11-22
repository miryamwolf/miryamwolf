import { Component, OnInit} from '@angular/core';
import { Curse } from '../class/Curse';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-curses',
  standalone: true,
  imports: [NgClass,FormsModule],
  templateUrl: './curses.component.html',
  styleUrl: './curses.component.css'
})
export class CursesComponent implements OnInit{
t1="הקורסים שלנו"
t2="טבלת נתונים"
  //cursess: Array<Curse> = new Array<Curse>()
 
    ngOnInit(): void{
      this.cursess.push(new Curse(1,"התעמלות","לשינסקי",20,1000,false,"2.jpg"))
      this.cursess.push(new Curse(2,"כושר","בר",10,1200,false,"5.jpg"))
      this.cursess.push(new Curse(3,"דרמה","כהן",15,460,false,"9.jpg"))
      this.cursess.push(new Curse(4,"ציור","לוי",2,900,true,"10.jpg"))
      this.cursess.push(new Curse(5,"פיתוח קול","שינקר",12,1300,false,"8.jpg"))
      this.cursess.push(this.newC)
  }
  cursess:Array<Curse>=new Array<Curse>()
  newC:Curse=new Curse()
  
  register(curse:Curse){
      curse.seets--
  }
  save()
  {
    console.log(this.newC);
  this.cursess.push(this.newC)
    this.newC=new Curse()
  }
  choosePic(e:any){
    this.newC.pic=e.srcElement.files[0].pic
  }
}

