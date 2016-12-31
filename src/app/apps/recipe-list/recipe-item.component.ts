import { Component, Input } from '@angular/core';

import { Application } from '../application';

@Component({
  selector: 'as-recipe-item',
  templateUrl: 'recipe-item.component.html'
})
export class RecipeItemComponent {
  @Input() application: Application;
  @Input() applicationId: number;

}
