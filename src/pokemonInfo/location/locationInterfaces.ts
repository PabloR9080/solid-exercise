export interface CountryInfo {
  getTopCountriesByFamilies: (pokemon_id: number, topNth: number) => Promise<string[]>
}

