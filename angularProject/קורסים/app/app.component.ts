import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursesComponent } from './curses/curses.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularProject';
}

