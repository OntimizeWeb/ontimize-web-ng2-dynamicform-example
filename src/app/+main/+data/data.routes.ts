import { Routes } from '@angular/router';
import {
  DataHomeComponent,
  DataDetailComponent
} from '../+data';


export const DATA_ROUTES: Routes = [
  {
    path: 'data',
    component: DataHomeComponent
  },
  {
    path: 'data/:DATA_ID',
    component: DataDetailComponent
  },
  {
    path: 'data/:DATA_ID/edit',
    component: DataDetailComponent
  }
];

