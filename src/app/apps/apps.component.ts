import { ApplicationCategory } from './models/application-category';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'as-apps',
  templateUrl: 'apps.component.html'
})
export class AppsComponent implements AfterViewInit {
  selectedApplicationCategory: ApplicationCategory;

  constructor() {}

  ngAfterViewInit(): void {
   $(document).ready(function(){
      $('.collapsible').collapsible();
   });

   $('.collapsible').collapsible({
      accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      onOpen: function(el) { $('.carousel').carousel('next'); }, // Callback for Collapsible open
      onClose: function(el) {  } // Callback for Collapsible close
    }
  );
  }

}
