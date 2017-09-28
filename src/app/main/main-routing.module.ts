import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';
import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'dynamicforms', pathMatch: 'full' },
      { path: 'data', loadChildren: './data/data.module#DataModule' },
      { path: 'dynamicforms', loadChildren: './dynamicforms/dynamicforms.module#DynamicformsModule' },
      { path: 'version', loadChildren: './version/version.module#VersionModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
