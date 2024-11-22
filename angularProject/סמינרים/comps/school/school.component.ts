import { Component } from '@angular/core';
import { School } from '../../class/School';
import { SchoolService } from '../../service/schools.service';

@Component({
  selector: 'app-school',
  standalone: true,
  imports: [],
  templateUrl: './school.component.html',
  styleUrl: './school.component.css'
})
export class SchoolComponent {
  constructor(public sc:SchoolService){}
  
}
