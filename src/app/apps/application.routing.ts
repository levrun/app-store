import { Routes, RouterModule } from "@angular/router";
import { AppsStartComponent } from "./apps-start.component";
import { AppDetailComponent } from "./app-detail/app-detail.component";
import { AppEditComponent } from "./app-edit/app-edit.component";
import { AppsComponent } from "./apps.component";

const RECIPE_ROUTES: Routes = [
  { path: '', component: AppsComponent, children: [
    { path: '', component: AppsStartComponent },
    { path: 'new', component: AppEditComponent },
    { path: ':id', component: AppDetailComponent },
    { path: ':id/edit', component: AppEditComponent }
  ]}
];

export const applicationsRouting = RouterModule.forChild(RECIPE_ROUTES);
