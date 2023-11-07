import { PokemonData } from '../dtos/PokemonData'

export interface PokemonInfo {
  handlePokemonInfo: (id: number) => Promise<PokemonData>
}

