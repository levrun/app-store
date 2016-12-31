import { Component, OnInit } from '@angular/core';

import { ApplicationCategory } from "./models/application-category";

@Component({
  selector: 'as-apps',
  templateUrl: 'apps.component.html'
})
export class AppsComponent implements OnInit {
  selectedApplicationCategory: ApplicationCategory;

  constructor() {}

  ngOnInit() {
  }
}
