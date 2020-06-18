import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { ActionCellRendererComponent } from './action-cell-renderer/action-cell-renderer';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule
  ],
  declarations: [
    ActionCellRendererComponent
  ],
  exports: [
    CommonModule,
    ActionCellRendererComponent
  ]
})
export class SharedModule { }
