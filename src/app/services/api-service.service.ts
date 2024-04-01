import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  //TODO ADD PAGINATION TO AND EXPAND TO 386 FOR FIRST 3 GEN
  // OR FIND A WAY TO SPEED UP LOAD TIME.
  baseUrl: string = 'https://pokeapi.co/api/v2/pokemon?limit=151'

  constructor(private http:HttpClient) { }

  getPokemon(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get<any>(url)
  }
}
