import { Application } from "../../shared";

export class ApplicationCategory {
  constructor(public id: number,
              public name: string,
              public description: string,
              public imagePath: string,
              public applications: Application[]) {}
}
