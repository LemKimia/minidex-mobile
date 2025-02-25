import {useQuery} from "@tanstack/react-query";
import apiRequest from "@/src/utils/api/api";

const apiRequestQuery = {
  fetchPokemon() {
    const {data, isLoading} = useQuery({
      queryFn: apiRequest.getPokemon,
      queryKey: ["getPokemon"],
    })
    return {
      pokemon: data, fetchingPokemon: isLoading
    }
  }
}

export default apiRequestQuery