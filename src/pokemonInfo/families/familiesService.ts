import QueryExecutor from '../utils/queryExecutor'
import { FamiliesInfo } from './familiesInfo'

export class FamilyService implements FamiliesInfo {
  private readonly queryExec: QueryExecutor

  constructor() {
    this.queryExec = new QueryExecutor()
  }

  async getFamilies(pokemonId: number): Promise<string[]> {
    let families = await this.queryExec.getPokemonFamily(pokemonId)
    families = families.map((elem) => elem.name)
    return families
  }
}
