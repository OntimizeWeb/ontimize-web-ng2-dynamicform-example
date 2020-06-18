import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { DynamicFormModule } from 'ontimize-web-ngx-dynamicform';

import { SharedModule } from '../../shared/shared.module';
import { DATA_MODULE_DECLARATIONS, DataRoutingModule } from './data-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    DynamicFormModule,
    DataRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: DATA_MODULE_DECLARATIONS,
  exports: DATA_MODULE_DECLARATIONS
})
export class DataModule { }
