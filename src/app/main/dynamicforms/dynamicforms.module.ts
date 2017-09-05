import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ng2';
import { DynamicFormModule } from 'ontimize-web-ng2-dynamicform';
import { DynamicFormBuilderModule } from 'ontimize-web-ng2-dynamicform-builder';
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
  declarations: DYNAMICFORMS_MODULE_DECLARATIONS,
  exports: DYNAMICFORMS_MODULE_DECLARATIONS
})
export class DynamicformsModule { }
