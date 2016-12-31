import { Component, OnInit } from '@angular/core';

import { Application } from '../application';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'as-app-list',
  templateUrl: 'app-list.component.html'
})
export class AppListComponent implements OnInit {
  applications: Application[] = [];

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.applicationService.appsChanged.subscribe(
      (applications: Application[]) => this.applications = applications
    );
    this.applicationService.getApplications();
  }

}
