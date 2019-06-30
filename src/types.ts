export interface IPokemon {
  id: number;
  url: string;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: IAbility[];
}

export interface IAbility {
  id: number;
  is_main_series: boolean;
  name: string;
  slot: number;
  is_hidden: boolean;
  url: string;
  pokemon: IPokemon[];
}

export interface ITrainer {
  id: string;
  city: string;
  name: string;
  numBadges: number;
}

export interface ITeam {
  id: string;
  level: string;
  name: string;
  trainer: string;
  abilities: IAbility[];
}

export interface IContext {
  dataSources: {
    pokeAPI: {
      getAbilities: () => Promise<IAbility[]>;
      getPokemonByID: (id: string) => Promise<IPokemon>;
      getAllPokemon: () => Promise<IPokemon[]>;
      getAbilityByID: (id: string) => Promise<IAbility>;
    };
  };
  admin: any;
}
