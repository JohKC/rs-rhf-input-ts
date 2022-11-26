import { CatColorEnum } from "../enums/CatColorEnum";

export interface Cat {
    id?: number,
    name: string,
    color: CatColorEnum,
    age: number,
}