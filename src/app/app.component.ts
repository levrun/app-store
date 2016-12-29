import { Component } from '@angular/core';
import { ApplicationService } from './recipes/application.service';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  providers: [ ApplicationService ]
})
export class AppComponent {

}
