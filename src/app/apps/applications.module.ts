import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

import { AppCategoryEditComponent } from './app-category-edit/app-category-edit.component';
import { AppsStartComponent } from './apps-start.component';
import { AppsComponent } from './apps.component';
import { AppCategoryListComponent } from './app-category-list/app-category-list.component';
import { AppCategoryItemComponent } from './app-category-list/app-category-item.component';
import { AppCategoryDetailComponent } from './app-category-detail/app-category-detail.component';
import { applicationsRouting } from './application.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AppsComponent,
    AppCategoryListComponent,
    AppCategoryItemComponent,
    AppCategoryDetailComponent,
    AppCategoryEditComponent,
    AppsStartComponent
  ],
  imports: [SharedModule, ReactiveFormsModule, applicationsRouting]

})
export class ApplicationsModule {}
