
interface sprites {
    front_default: string,
    front_shiny: string,
    back_default: string,
    back_shiny: string,
}

export interface cardDetail {
    name: string,
    sprites: sprites,
    height: number,
    weight: number,
    abilities: { ability: {name: string }}[],
    types: {type: { name: string}}[],
    moves: { move: {name: string}}[],
}