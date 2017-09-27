import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CommonModule } from '@angular/common';

import { BarMenuComponent } from './menu/bar-menu.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule
  ],
  declarations: [
    BarMenuComponent
  ],
  exports: [
    CommonModule,
    BarMenuComponent
  ]
})
export class SharedModule { }
