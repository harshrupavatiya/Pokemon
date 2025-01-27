interface imgInterface {
  front_default: string;
  front_shiny: string;
}

interface Other {
  showdown: imgInterface;
  home: imgInterface;
}

interface sprites {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
  other: Other;
}

export interface cardDetail {
  name: string;
  sprites: sprites;
  height: number;
  weight: number;
  cries: { latest: string };
  abilities: { ability: { name: string } }[];
  types: { type: { name: string } }[];
  moves: { move: { name: string } }[];
}
