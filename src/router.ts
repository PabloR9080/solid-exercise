import { Router } from 'express'
import { PokemonService } from './pokemonInfo/pokemon/pokemonService'

const InfoRouter = Router()
const pokemonService = new PokemonService()

InfoRouter.get('/info/:id', pokemonService.handlePokemonInfo);

InfoRouter.get('*', (_, res) => res.status(404).send('Not found, k-bro'))

export default InfoRouter
