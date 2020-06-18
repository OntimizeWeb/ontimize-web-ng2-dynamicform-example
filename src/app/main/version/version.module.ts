import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../shared/shared.module';
import { VersionRoutingModule } from './version-routing.module';
import { VersionComponent } from './version.component';

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
