export interface FecthPokemon {
  count: number;
  next: null;
  previous: null;
  results: selectPokemon[];
}

export interface selectPokemon {
  name: string;
  url: string;
  pic: string
}

export interface Pokemon {
  id: string;
  name: string;
  pic: string;
}

