import { move } from './movesService'

export interface MovesInfo {
  getLatestMoves: (moves: any[], topNth: number) => move[]
}
