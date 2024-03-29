import { Routes } from '@angular/router';
import { CardDisplay } from './pages/card-display/card-display.component';
import { PokemonDetails } from './pages/pokemon-details/pokemon-details.component';

export const routes: Routes = [
  {path: "", component: CardDisplay},
  {path:"details", component: PokemonDetails}
];
