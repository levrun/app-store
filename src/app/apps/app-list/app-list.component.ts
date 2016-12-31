import { Component, OnInit } from '@angular/core';

import { ApplicationCategory } from '../models/application-category';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'as-app-list',
  templateUrl: 'app-list.component.html'
})
export class AppListComponent implements OnInit {
  applicationsCategories: ApplicationCategory[] = [];

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.applicationService.appsCategoriesChanged.subscribe(
      (applicationsCategories: ApplicationCategory[]) => this.applicationsCategories = applicationsCategories
    );
    this.applicationService.getApplicationsCategories();
  }

}
