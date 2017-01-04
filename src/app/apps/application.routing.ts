import { Routes, RouterModule } from "@angular/router";
import { AppsStartComponent } from "./apps-start/apps-start.component";
import { AppCategoryDetailComponent } from "./app-category-detail/app-category-detail.component";
import { AppDetailComponent } from "./app-details/app-detail.component";
import { AppEditComponent } from "./app-edit/app-edit.component";
import { AppCategoryEditComponent } from "./app-category-edit/app-category-edit.component";
import { AppListComponent } from "./app-list/app-list.component";
import { AppsComponent } from "./apps.component";

const APP_ROUTES: Routes = [
  { path: '', component: AppsComponent, children: [
    { path: '', component: AppsStartComponent },
    { path: 'new', component: AppCategoryEditComponent },
    { path: ':id', component: AppCategoryDetailComponent },
    { path: ':id/apps', component: AppListComponent },
    { path: ':id/edit', component: AppCategoryEditComponent },
    { path: ':id/apps/:app_id/details', component: AppDetailComponent },
    { path: ':id/apps/:app_id/edit', component: AppEditComponent }
  ]}
];

export const applicationsRouting = RouterModule.forChild(APP_ROUTES);
