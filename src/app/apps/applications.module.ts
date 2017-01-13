import { SharedModule } from '../shared/shared.module';
import { AppCategoryDetailComponent } from './app-category-detail/app-category-detail.component';
import { AppCategoryEditComponent } from './app-category-edit/app-category-edit.component';
import { AppCategoryItemComponent } from './app-category-list/app-category-item.component';
import { AppCategoryListComponent } from './app-category-list/app-category-list.component';
import { AppDetailComponent } from './app-details/app-detail.component';
import { AppEditComponent } from './app-edit/app-edit.component';
import { AppItemComponent } from './app-list/app-item.component';
import { AppListComponent } from './app-list/app-list.component';
import { applicationsRouting } from './application.routing';
import { AppsStartComponent } from './apps-start/apps-start.component';
import { AppsComponent } from './apps.component';
import { TopAppsComponent } from './top-apps/top-apps.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { TruncatePipe } from '../pipes/truncate';

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
    TopAppsComponent,
    TruncatePipe
  ],
  imports: [SharedModule,
            ReactiveFormsModule,
            applicationsRouting,
            MaterializeModule]

})
export class ApplicationsModule {}
