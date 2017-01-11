import { DropdownDirective } from './dropdown.directive';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    DropdownDirective, HomeComponent
  ],
  exports: [DropdownDirective]


})
export class CoreModule {}
