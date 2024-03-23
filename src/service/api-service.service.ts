import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable} from 'rxjs'


import { Pokemon } from '../interfaces/pokemon';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  pokemon: any
  baseUrl: string = 'https://pokeapi.co/api/v2/pokemon?limit=151'

  constructor(private http:HttpClient) { }

  getPokemon() {
    const res =  this.http.get(this.baseUrl)
    res.subscribe((data) => {
      console.log(data);
      this.pokemon = data

    })
  

    console.log(this.pokemon);
  }
}
