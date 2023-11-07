import { runQuery } from '../../db'
export default class QueryExecutor {

  async getPokemonFamily(pokemonId?: number, fields?: string[]): Promise<any[]> {
    if (!pokemonId) return []
    if (fields) { fields.forEach((elem: string) => { elem = 'f.' + elem }) }
    const result = await runQuery(`SELECT ${fields?.join() ?? 'f.*'} FROM family f JOIN family_pokemon fp ON f.id = fp.family_id where fp.pokemon_id =${pokemonId}`)
    return result.results
  }

  async getPokemonCountries(familyInfo?: any[], limit?: number) {

    if (!familyInfo) return []
    const familiesId = familyInfo.map((elem) => elem.id)
    const result = await runQuery(`SELECT z.*, fz.probability FROM zone z JOIN family_zone fz ON z.id = fz.zone_id WHERE fz.family_id IN(${familiesId.join()})\
                                   ORDER BY fz.probability DESC ${limit ? `LIMIT ${limit}` : ' '}`)
    return result.results
  }


}
//
