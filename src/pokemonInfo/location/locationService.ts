import QueryExecutor from '../utils/queryExecutor'
import { CountryInfo } from './locationInterfaces'

export class LocationService implements CountryInfo {
  private readonly queryExec: QueryExecutor

  constructor() {
    this.queryExec = new QueryExecutor()
  }

  async getTopCountriesByFamilies(pokemonId: number, topNth: number): Promise<string[]> {
    const familiesId = await this.queryExec.getPokemonFamily(pokemonId)
    let topCountries = await this.queryExec.getPokemonCountries(familiesId, topNth)
    if (!topCountries) return []
    topCountries = topCountries.map(elem => elem.country_code)
    return topCountries
  }
}
