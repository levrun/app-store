import { Component, OnInit } from '@angular/core';
import { Application } from '../../shared/application';

@Component({
  selector: 'as-app-list',
  templateUrl: 'app-list.component.html'
})
export class AppListComponent implements OnInit {
  applications: Application[] = [];

  constructor() {}

  ngOnInit() {
    // this.applicationService.appsCategoriesChanged.subscribe(
    //   (applicationsCategories: ApplicationCategory[]) => this.applicationsCategories = applicationsCategories
    // );
    // this.applicationService.getApplicationsCategories();
  }

}
