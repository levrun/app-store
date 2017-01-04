import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

import { AppCategoryEditComponent } from './app-category-edit/app-category-edit.component';
import { AppsStartComponent } from './apps-start/apps-start.component';
import { AppsComponent } from './apps.component';
import { AppCategoryListComponent } from './app-category-list/app-category-list.component';
import { AppCategoryItemComponent } from './app-category-list/app-category-item.component';
import { AppItemComponent } from './app-list/app-item.component';
import { AppCategoryDetailComponent } from './app-category-detail/app-category-detail.component';
import { AppDetailComponent } from './app-details/app-detail.component';
import { AppEditComponent } from './app-edit/app-edit.component';
import { AppListComponent  } from './app-list/app-list.component';
import { applicationsRouting } from './application.routing';
import { TopAppsComponent } from './top-apps/top-apps.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AppsComponent,
    AppCategoryListComponent,
    AppCategoryItemComponent,
    AppItemComponent,
    AppCategoryDetailComponent,
    AppEditComponent,
    AppDetailComponent,
    AppCategoryEditComponent,
    AppListComponent,
    AppsStartComponent,
    TopAppsComponent
  ],
  imports: [SharedModule, ReactiveFormsModule, applicationsRouting]

})
export class ApplicationsModule {}
