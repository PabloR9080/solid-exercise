import { LocationService } from '../location/locationService'
import { MovesService } from '../moves/movesService'

import { ResponseDTO } from '../dtos/ResponseDTO'
import { mapJsonToOutput } from '../utils/mapperOutput'
import { fetchJson } from '../utils/fetchJson'
import { mapToPokemonDto } from '../utils/mapToPokemonDataDto'

export class PokemonService {
  private readonly locationService: LocationService
  private readonly movesService: MovesService

  constructor() {
    this.locationService = new LocationService()
    this.movesService = new MovesService()
  }

  handlePokemonInfo = async (httpRequest: any, httpResponse: any) => {
    const pokemonId = parseInt(httpRequest.params.id)
    try {
      const pokeInfoJson = mapToPokemonDto(await fetchJson(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`))

      const families = pokeInfoJson.types
      // TODO: placeholder for services can change later.
      const topMoves = this.movesService.getLatestMoves(pokeInfoJson.moves, 4)
      const topCountries = await this.locationService.getTopCountriesByFamilies(pokemonId, 3)
      pokeInfoJson.moves = topMoves
      const mapResponse: ResponseDTO = mapJsonToOutput(families, topCountries, pokeInfoJson)

      httpResponse.send(mapResponse)
    } catch (err) {
      console.log(err)
    }
  }
}


