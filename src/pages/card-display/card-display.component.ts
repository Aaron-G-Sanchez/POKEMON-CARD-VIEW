import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PokemonCard } from '../../components/pokemon-card.component'
import { Pokemon } from '../../interfaces/pokemon'

// TODO Fix data fetching
import { ApiService } from '../../service/api-service.service' 


@Component({
  selector: 'card-display',
  standalone: true,
  imports: [CommonModule, PokemonCard],
  templateUrl: './card-display.component.html',
  styleUrl: './card-display.scss',
})

// TODO Need to try and see if pokemon can be fetched and set here.
export class CardDisplay implements OnInit {
  pokemonList: any[] = []
  test: any[] | undefined

  constructor(private apiService: ApiService){}

  ngOnInit() {
    this.apiService.getPokemon()
  }
}