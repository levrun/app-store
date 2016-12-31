import { Component, OnInit } from '@angular/core';

import { Application } from "./models/application";

@Component({
  selector: 'as-apps',
  templateUrl: 'apps.component.html'
})
export class AppsComponent implements OnInit {
  selectedApplication: Application;

  constructor() {}

  ngOnInit() {
  }
}
