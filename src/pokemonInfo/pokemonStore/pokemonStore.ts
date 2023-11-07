import { Move } from '../dtos/PokemonData'
import { ResponseDTO } from '../dtos/ResponseDTO'
import { FamiliesInfo } from '../families/familiesInfo'
import { CountryInfo } from '../location/locationInterfaces'
import { MovesInfo } from '../moves/movesInterface'
import { PokemonInfo } from '../pokemon/pokemonInterface'
import { mapJsonToOutput } from '../utils/mapperOutput'


export class PokemonStore {



  constructor(
    private readonly pokemonInfo: PokemonInfo,
    private readonly movesInfo: MovesInfo,
    private readonly countryInfo: CountryInfo,
    private readonly familiesInfo: FamiliesInfo

  ) {
  }

  getPokemon = async (httpRequest: any, httpResponse: any) => {
    const pokemonId = parseInt(httpRequest.params.id)
    const pokeInfoJson = await this.pokemonInfo.handlePokemonInfo(pokemonId)

    const families = await this.familiesInfo.getFamilies(pokemonId)
    const topMoves = this.getLastestMoves(pokeInfoJson.moves, 4)
    const topCountries = await this.countryInfo.getTopCountriesByFamilies(pokemonId, 3)
    pokeInfoJson.moves = topMoves
    const mapResponse: ResponseDTO = mapJsonToOutput(families, topCountries, pokeInfoJson)

    httpResponse.send(mapResponse)
  }

  getLastestMoves(moves: Move[], topNth: number) {
    moves = moves.sort((a, b) => b.level - a.level)
    return moves.slice(0, topNth)
  }
}

