import { Move } from '../dtos/PokemonData'


export interface MovesInfo {
  getLatestMoves: (moves: any[], topNth: number) => Move[]
}
