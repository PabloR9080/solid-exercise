export interface FamiliesInfo {
  getFamilies: (pokemon_id: number) => Promise<string[]>
}


