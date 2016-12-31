import { Component, OnInit } from '@angular/core';

import { Application } from "./application";

@Component({
  selector: 'as-recipes',
  templateUrl: 'recipes.component.html'
})
export class RecipesComponent implements OnInit {
  selectedApplication: Application;

  constructor() {}

  ngOnInit() {
  }
}
