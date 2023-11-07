import { Move } from '../dtos/PokemonData'
import { MovesInfo } from './movesInterface'

export class MovesService implements MovesInfo {

  getLatestMoves(moves: Move[], topNth: number): Move[] {
    moves = moves.sort((a, b) => b.level - a.level)
    return moves.slice(0, topNth)
  }
}
