import { DropdownDirective } from './dropdown.directive';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    DropdownDirective, HomeComponent
  ],
  imports: [
    routing
  ],
  exports: [DropdownDirective]


})
export class CoreModule {}
