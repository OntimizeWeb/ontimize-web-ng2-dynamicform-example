import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ODataTableModule } from 'ontimize-web-ngx-datatable';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { DataRoutingModule, DATA_MODULE_DECLARATIONS } from './data-routing.module';
import { DynamicFormModule } from 'ontimize-web-ngx-dynamicform';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ODataTableModule,
    OntimizeWebModule,
    DynamicFormModule,
    DataRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: DATA_MODULE_DECLARATIONS,
  exports: DATA_MODULE_DECLARATIONS
})
export class DataModule { }
