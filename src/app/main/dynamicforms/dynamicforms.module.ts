import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { DynamicFormModule } from 'ontimize-web-ngx-dynamicform';
import { DynamicFormBuilderModule } from 'ontimize-web-ngx-dynamicform-builder';
import { DynamicformsRoutingModule, DYNAMICFORMS_MODULE_DECLARATIONS } from './dynamicforms-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    DynamicFormModule,
    DynamicFormBuilderModule,
    DynamicformsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: DYNAMICFORMS_MODULE_DECLARATIONS,
  exports: DYNAMICFORMS_MODULE_DECLARATIONS
})
export class DynamicformsModule { }
