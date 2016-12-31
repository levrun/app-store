import { Component, Input } from '@angular/core';

import { Application } from '../models/application';

@Component({
  selector: 'as-app-item',
  templateUrl: 'app-item.component.html'
})
export class AppItemComponent {
  @Input() application: Application;
  @Input() applicationId: number;

}
