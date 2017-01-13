import { Application } from '../../shared/application';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'as-app-item',
  templateUrl: 'app-item.component.html',
  styles: [`
    .card-action { padding : 10px }`
  ]
})
export class AppItemComponent {
  @Input() application: Application;
  @Input() applicationId: number;

}
