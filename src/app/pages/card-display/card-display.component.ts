import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PokemonCard } from '../../components/pokemon-card/pokemon-card.component'
import { ApiService } from '../../services/api-service.service' 
import { Pokemon } from '../../interfaces/pokemon'


@Component({
  selector: 'card-display',
  standalone: true,
  imports: [CommonModule, PokemonCard],
  templateUrl: './card-display.component.html',
  styleUrl: './card-display.scss',
})

export class CardDisplay implements OnInit {
  pokemonList: Pokemon[] = []

  constructor(private apiService: ApiService){}

  ngOnInit() {
    this.apiService.getPokemon()
      .subscribe(data => {
        this.pokemonList = data.results
      })
  }
}