import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', loadChildren: 'app/apps/applications.module#ApplicationsModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
