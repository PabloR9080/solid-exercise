import { ResponseDTO } from '../dtos/ResponseDTO'
import { CountryInfo } from '../location/locationInterfaces'
import { MovesInfo } from '../moves/movesInterface'
import { PokemonInfo } from '../pokemon/pokemonInterface'
import { mapJsonToOutput } from '../utils/mapperOutput'


export class PokemonStore {


  constructor(
    private readonly pokemonInfo: PokemonInfo,
    private readonly movesInfo: MovesInfo,
    private readonly countryInfo: CountryInfo

  ) {
  }

  getPokemon = async (httpRequest: any, httpResponse: any) => {
    const pokemonId = parseInt(httpRequest.params.id)
    const pokeInfoJson = await this.pokemonInfo.handlePokemonInfo(pokemonId)

    const families = pokeInfoJson.types
    const topMoves = this.movesInfo.getLatestMoves(pokeInfoJson.moves, 4)
    const topCountries = await this.countryInfo.getTopCountriesByFamilies(pokemonId, 3)
    pokeInfoJson.moves = topMoves
    const mapResponse: ResponseDTO = mapJsonToOutput(families, topCountries, pokeInfoJson)

    httpResponse.send(mapResponse)
  }
}
