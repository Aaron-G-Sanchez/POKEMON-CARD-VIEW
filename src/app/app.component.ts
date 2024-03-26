import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardDisplay } from '../pages/card-display/card-display.component'
import { NavBar } from '../components/nav-bar/nav-bar.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardDisplay, NavBar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
