import { Component } from "@angular/core";
import { MatToolbar } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: "nav-bar",
  standalone: true,
  imports: [MatToolbar, MatButtonModule, MatIconModule],
  templateUrl: "./nav-bar.component.html",
  styleUrl: "./nav-bar.scss"
})
export class NavBar {
  title: string = "nav-bar"
}