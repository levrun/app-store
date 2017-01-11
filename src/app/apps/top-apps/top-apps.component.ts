import { Application } from '../../shared/application';
import { ApplicationCategory } from '../models/application-category';
import { ApplicationService } from '../services/application.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'as-top-apps',
  templateUrl: 'top-apps.component.html'
})
export class TopAppsComponent implements OnInit {

  applications: Application[] = [];
  selectedApplicationCategory: ApplicationCategory;
  isDataAvailable = false;
  isShowTop5 = false;
  showHideButtonTitle = 'Show';

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.applicationService.appsCategoriesChanged.subscribe(
      (applicationsCategories: ApplicationCategory[]) => {
          if(this.isDataAvailable === false) {
            this.applications = applicationsCategories[0].applications;
            this.isDataAvailable = true;
          }
        }
    );
    this.applicationService.getApplicationsCategories();
  }

  showHide() {
    if(this.isShowTop5) {
      this.isShowTop5 = false;
      this.showHideButtonTitle = 'Show';
    } else {
      this.isShowTop5 = true;
      this.showHideButtonTitle = 'Hide';
    }
  }

}
