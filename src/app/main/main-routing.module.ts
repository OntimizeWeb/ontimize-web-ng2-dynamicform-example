import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ng2';

import { MainComponent } from './main.component';
import { DataModule } from './data/data.module';
import { DynamicformsModule } from './dynamicforms/dynamicforms.module';

export function loadDataModule() {
  return DataModule;
}

export function loadDynamicFormsModule() {
  return DynamicformsModule;
}

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'dynamicforms', pathMatch: 'full' },
      { path: 'data', loadChildren: loadDataModule },
      { path: 'dynamicforms', loadChildren: loadDynamicFormsModule }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
