import { Component, OnInit } from '@angular/core';
import { Application } from '../../shared/application';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../application.service';
import { ApplicationCategory } from "../models/application-category";

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'as-app-list',
  templateUrl: 'app-list.component.html'
})
export class AppListComponent implements OnInit {
  applications: Application[] = [];
  private subscription: Subscription;
  private appCategoryIndex: number;
  selectedApplicationCategory: ApplicationCategory;

  constructor(private route: ActivatedRoute,
              private applicatonService: ApplicationService,
              private router: Router) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.appCategoryIndex = params['id'];
        this.selectedApplicationCategory = this.applicatonService.getAppCategory(this.appCategoryIndex);
      }
    );
  }

  toCategoryDetails() {
    this.router.navigate(['/categories', this.appCategoryIndex]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
