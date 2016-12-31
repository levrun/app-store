import { Ingredient } from "../../shared";

export class ApplicationCategory {
  constructor(public name: string, public description: string, public imagePath: string, public ingredients: Ingredient[]) {}
}
