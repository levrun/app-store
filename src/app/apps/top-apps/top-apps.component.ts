import { Component, Input, OnInit } from '@angular/core';

import { Application } from '../../shared/application';
import { ApplicationCategory } from "../models/application-category";
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'as-top-apps',
  templateUrl: 'top-apps.component.html'
})
export class TopAppsComponent {

  applications: Application[] = [];
  selectedApplicationCategory: ApplicationCategory;
  isDataAvailable = false;

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    console.log("ngOnInit()");
    console.log("isDataAvailable " + this.isDataAvailable);
    this.applicationService.appsCategoriesChanged.subscribe(
      (applicationsCategories: ApplicationCategory[]) => {
          if(this.isDataAvailable === false) {
            this.applications = applicationsCategories[0].applications
            this.isDataAvailable = true;
          }
        }
    );
    this.applicationService.getApplicationsCategories();
  }

}
