import { Component } from "@angular/core";
import { Hours } from '../../classes/Hours';
import { NgClass, NgStyle } from "@angular/common";
@Component({
  selector: 'app-d',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './d.component.html',
  styleUrl: 'd.component.css'
})

export class DComponent {
  title: string = "סוכנות נסיעות"
  description: string = "סוכנות הנסיעות המובילה בישראל!!!"
  openinghours: Array<Hours> = new Array<Hours>()
  ngOnInit(): void {
    this.openinghours.push(new Hours("ראשון","8:00","17:30"))
    this.openinghours.push(new Hours("שני","8:00","17:30"))
    this.openinghours.push(new Hours("שלישי","8:00","17:30"))
    this.openinghours.push(new Hours("רביעי","8:00","17:30"))
    this.openinghours.push(new Hours("חמישי","8:00","17:30"))
    this.openinghours.push(new Hours("שישי","8:00","11:00"))
  }
}