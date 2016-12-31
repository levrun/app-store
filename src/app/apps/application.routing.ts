import { Routes, RouterModule } from "@angular/router";
import { AppsStartComponent } from "./apps-start.component";
import { AppDetailComponent } from "./app-detail/app-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { AppsComponent } from "./apps.component";

const RECIPE_ROUTES: Routes = [
  { path: '', component: AppsComponent, children: [
    { path: '', component: AppsStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: AppDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  ]}
];

export const applicationsRouting = RouterModule.forChild(RECIPE_ROUTES);
