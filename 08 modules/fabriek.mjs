import {Dino} from "./dino.mjs"
import {Plant} from "./plant.mjs"

export function MaakDino()
{
    return new Dino("gemaakte modulosaurus");
}

export function MaakPlant()
{
    return new Plant("gemaakte modulobloem");
}