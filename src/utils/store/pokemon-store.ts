import {create} from 'zustand';

type PokemonStoreType = {
  currentPageUrl: string;
  paginationNextUrl: string
  paginationPrevUrl: string
  setCurrentPageUrl: (currentPageUrl: string) => void;
  setPaginationNextUrl: (paginationNextUrl: string) => void
  setPaginationPrevUrl: (paginationPrevUrl: string) => void
}

export const usePokemonStore = create<PokemonStoreType>((set)=>({
  currentPageUrl: "https://pokeapi.co/api/v2/pokemon",
  paginationNextUrl: "",
  paginationPrevUrl: "",
  setCurrentPageUrl: (currentPageUrl: string) => set({currentPageUrl}),
  setPaginationPrevUrl: (paginationPrevUrl: string) => set({paginationPrevUrl}),
  setPaginationNextUrl: (paginationNextUrl: string) => set({paginationNextUrl}),

}))