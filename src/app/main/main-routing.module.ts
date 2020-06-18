import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: 'main', component: MainComponent, canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'dynamicforms', pathMatch: 'full' },
      { path: 'data', loadChildren: () => import('./data/data.module').then(m => m.DataModule) },
      { path: 'dynamicforms', loadChildren: () => import('./dynamicforms/dynamicforms.module').then(m => m.DynamicformsModule) },
      { path: 'version', loadChildren: () => import('./version/version.module').then(m => m.VersionModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
