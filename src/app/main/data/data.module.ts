import { NgModule } from '@angular/core';
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
  declarations: DATA_MODULE_DECLARATIONS,
  exports: DATA_MODULE_DECLARATIONS
})
export class DataModule { }
