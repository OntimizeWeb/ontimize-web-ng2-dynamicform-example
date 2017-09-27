import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { VersionComponent } from './version.component';
import { VersionRoutingModule } from './version-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    VersionRoutingModule
  ],
  declarations: [
    VersionComponent
  ]
})
export class VersionModule { }
