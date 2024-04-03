export interface Pokemon {
  name: string,
  url: string
}

export interface PokemonDetails {
  moves: [
    {
      move: {
        name: string
      }
    }
  ],
  name: string,
  sprites: {
    front_default: string
  }

}