import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

import { AppEditComponent } from './app-edit/app-edit.component';
import { AppsStartComponent } from './apps-start.component';
import { AppsComponent } from './apps.component';
import { AppListComponent } from './app-list/app-list.component';
import { AppItemComponent } from './app-list/app-item.component';
import { AppDetailComponent } from './app-detail/app-detail.component';
import { applicationsRouting } from './application.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AppsComponent,
    AppListComponent,
    AppItemComponent,
    AppDetailComponent,
    AppEditComponent,
    AppsStartComponent
  ],
  imports: [SharedModule, ReactiveFormsModule, applicationsRouting]

})
export class ApplicationsModule {}
