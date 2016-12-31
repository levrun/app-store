import { Component } from '@angular/core';
import { ApplicationService } from './apps/application.service';

@Component({
  selector: 'as-root',
  templateUrl: './app.component.html',
  providers: [ ApplicationService ]
})
export class AppComponent {}
