import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SchoolComponent } from '../comps/school/school.component';
import { StudentComponent } from '../comps/student/student.component';
import { SetComponent } from '../comps/set/set.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SchoolComponent,StudentComponent,SetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project';
}
