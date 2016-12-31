import { Ingredient } from "../shared";

export class Application {
  constructor(public name: string, public description: string, public imagePath: string, public ingredients: Ingredient[]) {}
}
