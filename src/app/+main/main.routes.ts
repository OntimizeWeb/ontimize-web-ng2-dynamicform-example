import { Routes } from '@angular/router';

import {MainComponent} from './main.component';
import {
  HomeRoutes
} from './+home/home.routes';

export const AppRoutes: Routes = [
  {
    path: 'main', component: MainComponent,
    children: [
      ...HomeRoutes,
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];



