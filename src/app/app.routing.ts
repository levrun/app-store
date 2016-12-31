import { Routes, RouterModule } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./home.component";

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', loadChildren: 'app/apps/applications.module#ApplicationsModule' },
  { path: 'shopping-list', component: ShoppingListComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
