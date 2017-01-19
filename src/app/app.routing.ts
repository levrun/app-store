import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: '', loadChildren: 'app/apps/applications.module#ApplicationsModule' },
  { path: 'categories', loadChildren: 'app/apps/applications.module#ApplicationsModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
