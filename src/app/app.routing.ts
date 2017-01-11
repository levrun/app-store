import { HomeComponent } from './home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', loadChildren: 'app/apps/applications.module#ApplicationsModule' },
  { path: 'shopping-list', component: ShoppingListComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
