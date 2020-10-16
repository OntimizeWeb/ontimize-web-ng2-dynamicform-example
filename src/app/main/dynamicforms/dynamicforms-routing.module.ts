import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DynamicFormsDataComponent } from './data/dynamicforms-data.component';
import { DynamicFormsDataFormComponent } from './data/dynamicforms-data.form.component';
import { DynamicFormsDetailComponent } from './detail/dynamicforms-detail.component';
import { DynamicFormDetailFormComponent } from './detail/dynamicforms-detail.form.component';
import { DynamicFormsHomeComponent } from './home/dynamicforms-home.component';
import { DynamicFormsNewComponent } from './new/dynamicforms-new.component';
import { DynamicFormsNewFormComponent } from './new/dynamicforms-new.form.component';

export const DYNAMICFORMS_MODULE_DECLARATIONS = [
  DynamicFormsDataComponent,
  DynamicFormsDataFormComponent,
  DynamicFormsDetailComponent,
  DynamicFormDetailFormComponent,
  DynamicFormsHomeComponent,
  DynamicFormsNewComponent,
  DynamicFormsNewFormComponent
];

export const routes: Routes = [
  { path: '', component: DynamicFormsHomeComponent },
  { path: 'new', component: DynamicFormsNewComponent },
  { path: ':VERSION_ID', component: DynamicFormsDetailComponent },
  // { path: ':VERSION_ID/edit', component: DynamicFormsEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicformsRoutingModule { }
