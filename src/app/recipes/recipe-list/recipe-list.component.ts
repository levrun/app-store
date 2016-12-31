import { Component, OnInit } from '@angular/core';

import { Application } from '../application';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'as-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  applications: Application[] = [];

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.applications = this.applicationService.getApplications();
    this.applicationService.recipesChanged.subscribe(
      (applications: Application[]) => this.applications = applications
    );
  }

}
