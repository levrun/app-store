import { Component, Input } from '@angular/core';

import { ApplicationCategory } from '../models/application-category';

@Component({
  selector: 'as-app-item',
  templateUrl: 'app-item.component.html'
})
export class AppItemComponent {
  @Input() applicationCategory: ApplicationCategory;
  @Input() applicationCategoryId: number;

}
