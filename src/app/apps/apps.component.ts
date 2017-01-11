import { ApplicationCategory } from './models/application-category';
import { Component } from '@angular/core';

@Component({
  selector: 'as-apps',
  templateUrl: 'apps.component.html'
})
export class AppsComponent {
  selectedApplicationCategory: ApplicationCategory;

  constructor() {}

}
