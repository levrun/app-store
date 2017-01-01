import { Component, Input } from '@angular/core';

import { ApplicationCategory } from '../models/application-category';

@Component({
  selector: 'as-app-category-item',
  templateUrl: 'app-category-item.component.html'
})
export class AppCategoryItemComponent {
  @Input() applicationCategory: ApplicationCategory;
  @Input() applicationCategoryId: number;

}
