import { ResponseDTO } from "../dtos/ResponseDTO"
import { mapToPokemonDto } from "./mapToPokemonDataDto"

export const mapJsonToOutput = (data: any): ResponseDTO => {
    return {
      families: [],
      countries: [],
      baseInformation: mapToPokemonDto(data),
    }
  }