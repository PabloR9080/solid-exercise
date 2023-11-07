import { Router } from 'express'
import { PokemonStore } from './pokemonInfo/pokemonStore/pokemonStore'

const InfoRouter = Router()
const pokemonStore = new PokemonStore()

InfoRouter.get('/info/:id', pokemonStore.handlePokemonInfo)

InfoRouter.get('*', (_, res) => res.status(404).send('Not found, k-bro'))

export default InfoRouter
