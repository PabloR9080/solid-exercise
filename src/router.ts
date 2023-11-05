import { Router } from 'express'
import { runQuery } from './db'
import { mapToPokemonDto } from './pokemonInfo/utils/mapToPokemonDataDto'

const InfoRouter = Router()

InfoRouter.get('/info/:id', async (httpRequest, httpResponse) => {
  const pokemonId = parseInt(httpRequest.params.id)
  //TODO: apply SOLID and refactor to get the same results
  try{

  
  const familyQuery = await runQuery('SELECT f.* FROM family f JOIN family_pokemon fp ON f.id = fp.family_id where fp.pokemon_id ='+pokemonId)
  const familyInfo = familyQuery.results;
  
  const pokeInfo = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonId);
  const pokeInfoJson = await pokeInfo.json();
  
  const countryQuery = await runQuery('SELECT z.*, fz.probability FROM zone z JOIN family_zone fz ON z.id = fz.zone_id WHERE fz.family_id IN('+familyInfo[0].id+','+ familyInfo[1].id+')');
  const countryInfo = countryQuery.results;

  //console.log(familyInfo);
  //console.log(countryInfo);
  //console.log(pokeInfoJson);
  httpResponse.send({families: familyInfo, ...pokeInfoJson, countries: countryInfo});
  }
  catch(err){
    console.log(err);
  }
  return;
})


InfoRouter.get('*', (_, res) => res.status(404).send('Not found, k-bro'))

export default InfoRouter
