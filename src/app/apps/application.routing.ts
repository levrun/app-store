import { Routes, RouterModule } from "@angular/router";
import { AppsStartComponent } from "./apps-start.component";
import { AppCategoryDetailComponent } from "./app-category-detail/app-category-detail.component";
import { AppEditComponent } from "./app-edit/app-edit.component";
import { AppsComponent } from "./apps.component";

const APP_ROUTES: Routes = [
  { path: '', component: AppsComponent, children: [
    { path: '', component: AppsStartComponent },
    { path: 'new', component: AppEditComponent },
    { path: ':id', component: AppCategoryDetailComponent },
    { path: ':id/edit', component: AppEditComponent }
  ]}
];

export const applicationsRouting = RouterModule.forChild(APP_ROUTES);
