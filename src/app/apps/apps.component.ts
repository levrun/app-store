import { Component, OnInit } from '@angular/core';

import { Application } from "./application";

@Component({
  selector: 'as-recipes',
  templateUrl: 'apps.component.html'
})
export class AppsComponent implements OnInit {
  selectedApplication: Application;

  constructor() {}

  ngOnInit() {
  }
}
