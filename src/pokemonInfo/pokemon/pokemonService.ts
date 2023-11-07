import { fetchJson } from '../utils/fetchJson'
import { mapToPokemonDto } from '../utils/mapToPokemonDataDto'
import { PokemonInfo } from './pokemonInterface'

export class PokemonService implements PokemonInfo {

  handlePokemonInfo = async (id: number) => {
    const pokeInfoJson = mapToPokemonDto(await fetchJson(`https://pokeapi.co/api/v2/pokemon/${id}`))
    return pokeInfoJson
  }
}


