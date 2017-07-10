import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './+login';
import { APP_ROUTES } from './+main/main.routes';

const LOGIN_ROUTES: Routes = [
  { path: 'login', component: LoginComponent }];

// All routes of the application
const routes: Routes = [
  ...LOGIN_ROUTES,
  ...APP_ROUTES,
  { path: '', redirectTo: 'main', pathMatch: 'prefix' }
];

let opt = {
  enableTracing: false // true if you want to print navigation routes
};

export const routing = RouterModule.forRoot(routes, opt);
