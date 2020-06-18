import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataDetailComponent } from './detail/data-detail.component';
import { DataDetailFormComponent } from './detail/data-detail.form.component';
import { DataHomeComponent } from './home/data-home.component';

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
