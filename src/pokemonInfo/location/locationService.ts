import { CountryInfo } from "./locationInterfaces";

export class LocationService implements CountryInfo{

    async getTopCountriesByFamilies(topNth: number, families: string[]): Promise<string[]> {
        return [];
    }
}