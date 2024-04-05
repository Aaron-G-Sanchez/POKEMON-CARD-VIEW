export interface Pokemon {
  name: string,
  url: string
}

// TODO need to get this interface to match the pokemon
// details.
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