import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { CommonModule} from "@angular/common"
import {Pokemon} from '../../interfaces/pokemon'
import { MatCardModule } from '@angular/material/card'
import { ApiService } from '../../services/api-service.service'

@Component({
  selector: 'pokemon-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.scss',
})
export class PokemonCard implements OnInit{
 @Input() pokemon!:Pokemon 
 @Output() pokemonData = new EventEmitter<any>()
 details!: any
 isLoading: boolean = true

 constructor(private apiService: ApiService){}

  ngOnInit() {
    this.apiService.getPokemonDetails(this.pokemon.url)
      .subscribe(data => {
        this.details = data
        this.isLoading = false
      })
  }

  // TODO Need to pass the details to the parent (card-display) component
  // for display in the sidenav.
  passPokemon() {
    // console.log(this.details);
    this.pokemonData.emit(this.details)
  }
}