import { Component, OnInit } from '@angular/core';

import { ApplicationCategory } from '../models/application-category';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'as-app-category-list',
  templateUrl: 'app-category-list.component.html'
})
export class AppCategoryListComponent implements OnInit {
  applicationsCategories: ApplicationCategory[] = [];

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    console.log('AppCategoryListComponent ngOnInit');
    this.applicationService.appsCategoriesChanged.subscribe(
      (applicationsCategories: ApplicationCategory[]) => {
        this.applicationsCategories = applicationsCategories;
        console.log('appsCategoriesChanged.subscribe called during ngOnInit');
      }
    );
    this.applicationService.getApplicationsCategories();
  }

}
