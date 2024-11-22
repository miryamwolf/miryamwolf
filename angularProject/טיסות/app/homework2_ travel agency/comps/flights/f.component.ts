import { Component } from "@angular/core";
import { Flight } from "../../classes/Flight";
import { NgStyle } from "@angular/common";

@Component({
    selector: 'app-flight',
    standalone: true,
    imports: [NgStyle],
    templateUrl: './f.component.html',
    styleUrl: 'f.component.css'
  })
  export class FComponent{
    flightshours: Array<Flight> = new Array<Flight>()
    ngOnInit(){
        this.flightshours.push(new Flight("אל-על","בלגיה",1000,"8:00",20,false))
        this.flightshours.push(new Flight("אל-על","אוסטרליה",10000,"10:00",10,false))
        this.flightshours.push(new Flight("אל-על","פולין",1200,"15:00",15,false))
        this.flightshours.push(new Flight("אל-על","שוויץ",1400,"00:00",2,false))
        this.flightshours.push(new Flight("אל-על","ניו-יורק",5000,"2:40",12,false))
    }
  }