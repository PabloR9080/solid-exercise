import { ResponseDTO } from '../dtos/ResponseDTO'
import { mapToPokemonDto } from './mapToPokemonDataDto'

export const mapJsonToOutput = (families: string[], countries: string[], data: any): ResponseDTO => {
  return {
    families,
    countries,
    baseInformation: data
  }
}
