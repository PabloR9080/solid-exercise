import { Router } from 'express'
import { FamilyService } from './pokemonInfo/families/familiesService'
import { LocationService } from './pokemonInfo/location/locationService'
import { MovesService } from './pokemonInfo/moves/movesService'
import { PokemonService } from './pokemonInfo/pokemon/pokemonService'
import { PokemonStore } from './pokemonInfo/pokemonStore/pokemonStore'

const InfoRouter = Router()
const pokemonStore = new PokemonStore(new PokemonService(), new MovesService(), new LocationService(), new FamilyService())

InfoRouter.get('/info/:id', pokemonStore.getPokemon)

InfoRouter.get('*', (_, res) => res.status(404).send('Not found, k-bro'))

export default InfoRouter
