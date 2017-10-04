import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';
import { MainComponent } from './main.component';

import { DataModule } from './data/data.module';
import { DynamicformsModule } from './dynamicforms/dynamicforms.module';
import { VersionModule } from './version/version.module';

export function loadDataModule() {
  return DataModule;
}

export function loadDynamicFormsModule() {
  return DynamicformsModule;
}

export function loadVersionModule() {
  return VersionModule;
}

export const routes: Routes = [
  {
    path: 'main', component: MainComponent, canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'dynamicforms', pathMatch: 'full' },
      { path: 'data', loadChildren: loadDataModule },
      { path: 'dynamicforms', loadChildren: loadDynamicFormsModule },
      { path: 'version', loadChildren: loadVersionModule }
    ]
  }
];


// export const routes: Routes = [
//   {
//     path: 'main',
//     component: MainComponent,
//     canActivate: [AuthGuardService],
//     children: [
//       { path: '', redirectTo: 'dynamicforms', pathMatch: 'full' },
//       { path: 'data', loadChildren: './data/data.module#DataModule' },
//       { path: 'dynamicforms', loadChildren: './dynamicforms/dynamicforms.module#DynamicformsModule' },
//       { path: 'version', loadChildren: './version/version.module#VersionModule' }
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
