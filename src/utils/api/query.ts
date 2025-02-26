import {useQuery} from "@tanstack/react-query";
import apiRequest from "@/src/utils/api/api";
import {usePokemonStore} from "@/src/utils/store/pokemon-store";

export const useFetchPokemon = () => {
  const currentPageUrl = usePokemonStore.getState().currentPageUrl;
  return useQuery({
    queryKey: ['getPokemon'],
    queryFn: ()=> apiRequest.getPokemon(currentPageUrl),
  })
}

