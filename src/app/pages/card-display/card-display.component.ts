import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PokemonCard } from '../../components/pokemon-card/pokemon-card.component'
import { ApiService } from '../../services/api-service.service' 
import { SidenavService } from '../../services/sidenav-service.service'
import { Pokemon } from '../../interfaces/pokemon'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import {MatSidenavModule} from '@angular/material/sidenav'


@Component({
  selector: 'card-display',
  standalone: true,
  imports: [CommonModule, PokemonCard, MatSidenavModule],
  templateUrl: './card-display.component.html',
  styleUrl: './card-display.scss',
})

export class CardDisplay implements OnInit {
  currentParty$: Observable<any>
  pokemonList: Pokemon[] = []
  selectedPokemon: any

  constructor(
    private apiService: ApiService,
    private store: Store<{ party: any }>,
    public sidenavService: SidenavService
    ){
    this.currentParty$ = store.select('party')
  }

  
  ngOnInit() {
    this.apiService.getPokemon()
      .subscribe(data => {
        this.pokemonList = data.results
      })
  }

  getSelectedPokemon($event: any){
    this.selectedPokemon = $event
  }
}