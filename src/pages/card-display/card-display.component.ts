import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PokemonCard } from '../../components/pokemon-card.component'
import { Pokemon } from '../../interfaces/pokemon'

@Component({
  selector: 'card-display',
  standalone: true,
  imports: [CommonModule,PokemonCard],
  templateUrl: './card-display.component.html',
  styleUrl: './card-display.scss',
})
export class CardDisplay {
  pokemonList:Pokemon[] = [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
    }
  ]
}