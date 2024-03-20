import { Component, Input } from '@angular/core'
import {Pokemon} from '../interfaces/pokemon'
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'pokemon-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.scss',
})
export class PokemonCard {
 title = 'pokemon-card'
 @Input() pokemon!:Pokemon 

}