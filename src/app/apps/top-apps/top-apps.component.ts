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
  isShowTop5 = false;
  showHideButtonTitle = "Hide"

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

  showHide() {
    if(this.isShowTop5) {
      this.isShowTop5 = false;
      this.showHideButtonTitle = "Show";
    } else {
      this.isShowTop5 = true;
      this.showHideButtonTitle = "Hide"
    }
  }

}
