import { Component, Input } from '@angular/core';

import { Application } from '../../shared/application';

@Component({
  selector: 'as-app-item',
  templateUrl: 'app-item.component.html'
})
export class AppItemComponent {
  @Input() application: Application;
  @Input() applicationId: number;

  getCommas() {
    return "...";
  }

}
