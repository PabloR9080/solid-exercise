import { LocationService } from '../location/locationService'
import { MovesService } from '../moves/movesService'

import { fetchJson } from '../utils/fetchJson'
import { mapToPokemonDto } from '../utils/mapToPokemonDataDto'

export class PokemonService {
  private readonly locationService: LocationService
  private readonly movesService: MovesService

  constructor() {
    this.locationService = new LocationService()
    this.movesService = new MovesService()
  }

  handlePokemonInfo = async (id: number) => {
    const pokeInfoJson = mapToPokemonDto(await fetchJson(`https://pokeapi.co/api/v2/pokemon/${id}`))
    return pokeInfoJson
  }
}


