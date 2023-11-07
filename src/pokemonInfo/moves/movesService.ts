import { MovesInfo } from "./movesInterface";

export class MovesService implements MovesInfo{

    async getLatestMoves(topNth: number): Promise<string[]> {
        return [];
    }
}