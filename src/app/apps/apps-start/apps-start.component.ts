import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'as-app-start',
  templateUrl: 'apps-start.component.html'
})
export class AppsStartComponent implements AfterViewInit {

  ngAfterViewInit(): void {
      $('#btn-collapse-side-nav2').sideNav({
          menuWidth: 300,
          closeOnClick: true,
          draggable: true
        }
      );
      console.log("#btn-collapse-side-nav called");
  }

}
