export interface MovesInfo{
    getLatestMoves(topNth: number): Promise<any[]>;
}