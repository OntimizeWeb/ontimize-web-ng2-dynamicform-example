import { NgModule } from '@angular/core';
import { AuthGuardService } from 'ontimize-web-ng2';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'prefix',
    canActivate: [AuthGuardService]
  }
];

let opt = {
  enableTracing: false // true if you want to print navigation routes
};

@NgModule({
  imports: [RouterModule.forRoot(routes, opt)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
