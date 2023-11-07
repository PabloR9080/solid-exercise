import { MovesInfo } from './movesInterface'
export interface move {name: string, level: number}
export class MovesService implements MovesInfo {

  getLatestMoves(moves: move[], topNth: number): move[] {
    moves = moves.sort((a, b) => b.level - a.level)
    return moves.slice(0, topNth)
  }
}
