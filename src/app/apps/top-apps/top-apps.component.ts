import { Application } from '../../shared/application';
import { ApplicationCategory } from '../models/application-category';
import { ApplicationService } from '../services/application.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'as-top-apps',
  templateUrl: 'top-apps.component.html'
})
export class TopAppsComponent implements OnInit, AfterViewInit  {

  applications: Application[] = [];
  selectedApplicationCategory: ApplicationCategory;
  isDataAvailable = false;

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

  ngAfterViewInit(): void {
   $(document).ready(function(){
      $('.carousel').carousel();
    });
  }

}
