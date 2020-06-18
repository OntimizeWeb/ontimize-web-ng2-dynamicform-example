import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    LoginRoutingModule,
    TranslateModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
