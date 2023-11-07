import { ResponseDTO } from '../dtos/ResponseDTO'

export const mapJsonToOutput = (families: string[], countries: string[], data: any): ResponseDTO => {
  return {
    families,
    countries,
    baseInformation: data
  }
}
