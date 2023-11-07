export interface CountryInfo{
    getTopCountriesByFamilies(topNth:number, families: string[]): Promise<string[]>;
}

