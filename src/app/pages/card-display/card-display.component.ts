import { Component, OnInit, OnChanges } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PokemonCard } from '../../components/pokemon-card/pokemon-card.component'
import { ApiService } from '../../services/api-service.service'
import { ADD_POKEMON } from '../../store/current-party.actions'
import { Pokemon } from '../../interfaces/pokemon'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { SidenavService } from '../../services/sidenav-service.service'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatSnackBar} from '@angular/material/snack-bar'

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
    public sidenavService: SidenavService,
    private _snackbar: MatSnackBar
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
    this.openSnackBar()
  }

  addToTeam() {
    this.store.dispatch(ADD_POKEMON({pokemon: this.selectedPokemon}))
  }

  // TODO Look into having a button on the pokemon card to add the pokemon to the team
  // AND THEN show the snack bar rather than having the snack bar pop up for every click.
  openSnackBar() {
    this._snackbar
      .open(this.selectedPokemon.name,  "Add", {duration: 4000})
      .onAction().subscribe(()=>{
        this.addToTeam()
      })
    
  }
}