import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

import { AppEditComponent } from './app-edit/app-edit.component';
import { AppsStartComponent } from './apps-start.component';
import { AppsComponent } from './apps.component';
import { AppCategoryListComponent } from './app-category-list/app-category-list.component';
import { AppCategoryItemComponent } from './app-category-list/app-category-item.component';
import { AppDetailComponent } from './app-detail/app-detail.component';
import { applicationsRouting } from './application.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AppsComponent,
    AppCategoryListComponent,
    AppCategoryItemComponent,
    AppDetailComponent,
    AppEditComponent,
    AppsStartComponent
  ],
  imports: [SharedModule, ReactiveFormsModule, applicationsRouting]

})
export class ApplicationsModule {}
