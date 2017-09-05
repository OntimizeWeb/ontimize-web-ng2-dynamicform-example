import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ng2';
import { DataRoutingModule, DATA_MODULE_DECLARATIONS } from './data-routing.module';
import { DynamicFormModule } from 'ontimize-web-ng2-dynamicform';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    DynamicFormModule,
    DataRoutingModule
  ],
  declarations: DATA_MODULE_DECLARATIONS,
  exports: DATA_MODULE_DECLARATIONS
})
export class DataModule { }
