import { Component, OnInit } from "@angular/core";
import { ApplicationCategory } from '../apps/models/application-category';
import { ApplicationService } from '../apps/services/application.service';

@Component({
  selector: 'as-side-nav',
  templateUrl: './side-nav.component.html'
})

export class SideNavComponent implements OnInit {

  applicationsCategories: ApplicationCategory[] = [];

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.applicationService.appsCategoriesChanged.subscribe(
      (applicationsCategories: ApplicationCategory[]) => this.applicationsCategories = applicationsCategories
    );
    this.applicationService.getApplicationsCategories();
  }

}
