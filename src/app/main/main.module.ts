import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    OntimizeWebModule,
    MainRoutingModule,
    SharedModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
