import { Routes } from '@angular/router';
import {
  DynamicFormsDetailComponent,
  DynamicFormsEditComponent,
  DynamicFormsHomeComponent,
  DynamicFormsNewComponent,
  DynamicFormsDataComponent
} from '../+dynamicforms';


export const DYNAMICFORMS_ROUTES: Routes = [
  {
    path: 'dynamicforms',
    component: DynamicFormsHomeComponent
  },
  {
    path: 'dynamicforms/new',
    component: DynamicFormsNewComponent
  },
  {
    path: 'dynamicforms/:VERSION_ID',
    component: DynamicFormsDetailComponent
  },
  {
    path: 'dynamicforms/:VERSION_ID/edit',
    component: DynamicFormsEditComponent
  },
  {
    path: 'dynamicforms/:VERSION_ID/data',
    component: DynamicFormsDataComponent
  }
];

