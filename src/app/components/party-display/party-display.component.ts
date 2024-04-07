import { Component, Input } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'party-display',
  standalone: true,
  templateUrl: './party-display.component.html',
  styleUrl: './party-display.scss',
  imports: [MatCardModule]
})
export class PartyDisplay {
  @Input() pokemon!:any
}