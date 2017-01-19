import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Application } from '../../shared/application';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../services/application.service';
import { ApplicationCategory } from '../models/application-category';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'as-app-list',
  templateUrl: 'app-list.component.html'
})
export class AppListComponent implements OnInit, OnDestroy, AfterViewInit {
  private subscription: Subscription;
  private appCategoryIndex: number;
  applications: Application[] = [];
  selectedApplicationCategory: ApplicationCategory;
  applicationsCategories: ApplicationCategory[] = [];

  constructor(private route: ActivatedRoute,
              private applicationService: ApplicationService,
              private router: Router) {}

  ngOnInit() {
    this.applicationService.appsCategoriesChanged.subscribe(
      (applicationsCategories: ApplicationCategory[]) => {
        this.applicationsCategories = applicationsCategories;

        this.subscription = this.route.params.subscribe(
          (params: any) => {
            if(typeof params['id'] === 'undefined') {
              this.appCategoryIndex = 0;
            } else {
              this.appCategoryIndex = params['id'];
            }

            this.selectedApplicationCategory = this.applicationService.getAppCategory(this.appCategoryIndex);
            this.applications = this.selectedApplicationCategory.applications;
          }
        );

      }
    );
    this.applicationService.getApplicationsCategories();

  }

  ngAfterViewInit(): void {
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 25,
      constrain_width: true, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );
  }

  toCategoryDetails() {
    this.router.navigate(['/categories', this.appCategoryIndex]);
  }

  addNewApplication() {
      this.router.navigate(['/categories', this.appCategoryIndex, 'apps', -1, 'edit']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
