import { Component } from '@angular/core';
import { CollapseModule } from 'ng2-bootstrap/collapse';

import { ApplicationService } from './apps/application.service';

@Component({
  selector: 'as-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  public isCollapsed:boolean = false;

  constructor(private applicationService: ApplicationService) {}

   public collapsed(event:any):void {
      console.log(event);
    }

    public expanded(event:any):void {
      console.log(event);
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
