import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

import { AppEditComponent } from './app-edit/app-edit.component';
import { AppsStartComponent } from './apps-start.component';
import { AppsComponent } from './apps.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { AppDetailComponent } from './app-detail/app-detail.component';
import { applicationsRouting } from './application.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AppsComponent,
    RecipeListComponent,
    RecipeItemComponent,
    AppDetailComponent,
    AppEditComponent,
    AppsStartComponent
  ],
  imports: [SharedModule, ReactiveFormsModule, applicationsRouting]

})
export class ApplicationsModule {}
