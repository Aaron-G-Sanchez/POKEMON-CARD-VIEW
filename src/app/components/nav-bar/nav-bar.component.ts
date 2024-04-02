import { Component } from "@angular/core";

@Component({
  selector: "nav-bar",
  standalone: true,
  templateUrl: "./nav-bar.component.html",
  styleUrl: "./nav-bar.scss"
})
export class NavBar {
  title: string = "nav-bar"
}