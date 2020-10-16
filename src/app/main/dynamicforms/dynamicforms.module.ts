import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { DynamicFormModule } from 'ontimize-web-ngx-dynamicform';
import { DynamicFormBuilderModule } from 'ontimize-web-ngx-dynamicform-builder';

import { SharedModule } from '../../shared/shared.module';
import { DYNAMICFORMS_MODULE_DECLARATIONS, DynamicformsRoutingModule } from './dynamicforms-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    DynamicFormModule,
    DynamicFormBuilderModule,
    DynamicformsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [...DYNAMICFORMS_MODULE_DECLARATIONS],
  exports: DYNAMICFORMS_MODULE_DECLARATIONS
})
export class DynamicformsModule { }
