export type IResponse<IPokemon> = {
  count: number;
  next: string;
  previous: string;
  results: IPokemon[]
}

export type IPokemon = {
  name: string;
  url: string;
}