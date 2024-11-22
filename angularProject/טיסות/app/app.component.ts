import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DComponent } from './homework2_ travel agency/comps/travle/d.component';
import { FComponent } from './homework2_ travel agency/comps/flights/f.component';


@Component({
  selector: 'app-curses',
  standalone: true,
  imports: [RouterOutlet,CComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class CComponent {
  title = 'mmm';
}

