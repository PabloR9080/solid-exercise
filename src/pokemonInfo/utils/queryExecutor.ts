import { runQuery } from "../../db";
export default class QueryExecutor{
    constructor(){
    }
    async getPokemonFamily(pokemonId?: number, fields?:string[]){
        if(!pokemonId) return;
        if(fields)
            fields.forEach( (elem: string) => { elem = "f."+elem; } );
        const result = await runQuery(`SELECT ${ fields?.join() ?? 'f.*' } FROM family f JOIN family_pokemon fp ON f.id = fp.family_id where fp.pokemon_id =${pokemonId}`)
        return result.results;
    }
    async getPokemonCountries(familyInfo?: any[]){
        if(!familyInfo) return;
        const result = await runQuery('SELECT z.*, fz.probability FROM zone z JOIN family_zone fz ON z.id = fz.zone_id WHERE fz.family_id IN('+familyInfo[0].id+','+ familyInfo[1].id+')');
        return result.results;
    }
}