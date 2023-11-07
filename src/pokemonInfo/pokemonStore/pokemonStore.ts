import { ResponseDTO } from "../dtos/ResponseDTO";
import { LocationService } from "../location/locationService";
import { MovesService } from "../moves/movesService";
import { PokemonService } from "../pokemon/pokemonService";
import { mapJsonToOutput } from "../utils/mapperOutput";


export class PokemonStore{
    private locationService: LocationService;
    private pokemonService: PokemonService;
    private movesService : MovesService;
    
    constructor(){
        this.locationService = new LocationService();
        this.pokemonService = new PokemonService();
        this.movesService = new MovesService();
    }

    handlePokemonInfo = async (httpRequest: any, httpResponse: any) => {
        const pokemonId = parseInt(httpRequest.params.id)
        const pokeInfoJson = await this.pokemonService.handlePokemonInfo(pokemonId)

        const families = pokeInfoJson.types
        const topMoves = this.movesService.getLatestMoves(pokeInfoJson.moves, 4)
        const topCountries = await this.locationService.getTopCountriesByFamilies(pokemonId, 3)
        pokeInfoJson.moves = topMoves
        const mapResponse: ResponseDTO = mapJsonToOutput(families, topCountries, pokeInfoJson)

        httpResponse.send(mapResponse)
        }
}