import HomeScreen from "@/src/screen/HomeScreen";
import { useEffect } from "react";
import { useFetchPokemon } from "@/src/utils/api/query";
import { usePokemonStore } from "@/src/utils/store/pokemon-store";

const Index = () => {
  const setPaginationNextUrl = usePokemonStore(
    (state) => state.setPaginationNextUrl,
  );
  const currentPageUrl = usePokemonStore((state) => state.currentPageUrl);
  const paginationNextUrl = usePokemonStore((state) => state.paginationNextUrl);

  const { data: pokemonData, isLoading: fetchingPokemonData } =
    useFetchPokemon();
  const pokemonList = pokemonData?.results || [];
  useEffect(() => {
    try {
      setPaginationNextUrl(pokemonData?.next || "");
    } catch (error: any) {
      console.error("error message:", error.message);
    }
  }, [paginationNextUrl]);
  return <HomeScreen pokemonList={pokemonList} />;
};
export default Index;
