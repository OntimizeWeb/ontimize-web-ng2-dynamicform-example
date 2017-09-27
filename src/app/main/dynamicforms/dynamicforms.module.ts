import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ODataTableModule } from 'ontimize-web-ngx-datatable';
import { DynamicFormModule } from 'ontimize-web-ngx-dynamicform';
import { DynamicFormBuilderModule } from 'ontimize-web-ngx-dynamicform-builder';
import { DynamicformsRoutingModule, DYNAMICFORMS_MODULE_DECLARATIONS } from './dynamicforms-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    ODataTableModule,
    DynamicFormModule,
    DynamicFormBuilderModule,
    DynamicformsRoutingModule
  ],
  declarations: DYNAMICFORMS_MODULE_DECLARATIONS,
  exports: DYNAMICFORMS_MODULE_DECLARATIONS
})
export class DynamicformsModule { }
