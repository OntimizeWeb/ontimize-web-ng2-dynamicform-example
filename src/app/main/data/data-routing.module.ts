import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataHomeComponent } from './home/data-home.component';
import { DataDetailComponent } from './detail/data-detail.component';
import { DataDetailFormComponent } from './detail/data-detail.form.component';

export const DATA_MODULE_DECLARATIONS = [
  DataHomeComponent,
  DataDetailComponent,
  DataDetailFormComponent
];

export const routes: Routes = [
  { path: '', component: DataHomeComponent },
  { path: ':DATA_ID', component: DataDetailComponent },
  { path: ':DATA_ID/edit', component: DataDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }
