import { Component, AfterViewInit } from '@angular/core';
import { ApplicationService } from '../apps/services/application.service';


@Component({
  selector: 'as-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements AfterViewInit {

  constructor(private applicationService: ApplicationService) {}

  ngAfterViewInit(): void {
      $('#btn-collapse-side-nav').sideNav({
          menuWidth: 300,
          closeOnClick: true,
          draggable: true
        }
      );

      $( document ).ready(function(){
        $('.button-collapse').sideNav();
      });
  }

  onStore() {
    this.applicationService.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onFetch() {
    this.applicationService.fetchData();
  }


}
