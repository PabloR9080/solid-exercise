import { ResponseDTO } from "../dtos/ResponseDTO";
import { LocationService } from "../location/locationService";
import { mapJsonToOutput } from "../utils/mapperOutput";
import { MovesService } from "../moves/movesService";
import { fetchJson } from "../utils/fetchJson";
import { mapToPokemonDto } from "../utils/mapToPokemonDataDto";

export class PokemonService{
    private locationService: LocationService;
    private movesService: MovesService;

    constructor(){
        this.locationService = new LocationService();
        this.movesService = new MovesService();
    }

    handlePokemonInfo = async (httpRequest: any, httpResponse: any) =>{
        const pokemonId = parseInt(httpRequest.params.id)
        try{
            const pokeInfoJson = mapToPokemonDto(await fetchJson(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`));
            const families = pokeInfoJson.types;
            //TODO: placeholder for services can change later.
            //const topMoves = this.movesService.getLatestMoves(3);
            //const topCountries = this.locationService.getTopCountriesByFamilies(4, families);
            //const mapResponse: ResponseDTO = mapJsonToOutput([pokeInfoJson, topMoves, topCountries]);

            httpResponse.send({...pokeInfoJson, families: families});
        }
        catch(err){
            console.log(err);
        }
    }
}


