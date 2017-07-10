import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DYNAMICFORMS_ROUTES } from './+dynamicforms/dynamicforms.routes';
import { DATA_ROUTES } from './+data/data.routes';

export const APP_ROUTES: Routes = [
  {
    path: 'main', component: MainComponent,
    children: [
      ...DYNAMICFORMS_ROUTES,
      ...DATA_ROUTES,
      { path: '', redirectTo: 'dynamicforms', pathMatch: 'full' }
    ]
  }
];



