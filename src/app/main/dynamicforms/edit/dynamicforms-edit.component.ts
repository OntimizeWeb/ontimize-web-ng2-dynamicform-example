import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {
  OFormComponent
} from 'ontimize-web-ngx';

import { ODynamicFormBuilderComponent } from 'ontimize-web-ngx-dynamicform-builder/index';
import { DynamicFormsEditFormComponent } from './dynamicforms-edit.form.component';

@Component({
  selector: 'dynamicforms-edit',
  template: require('./dynamicforms-edit.component.html'),
  styles: [require('./dynamicforms-edit.component.scss')],
  encapsulation: ViewEncapsulation.None
})
export class DynamicFormsEditComponent implements OnInit {

  @ViewChild('oForm')
  form: DynamicFormsEditFormComponent;

  @ViewChild('oDynamicFormBuilder')
  dynamicFormBuilder: ODynamicFormBuilderComponent;

  dynamicFormDefinition: Object = {};

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    if (this.form && this.dynamicFormBuilder) {
      this.form.setFormBuilder(this.dynamicFormBuilder);
    }
  }

}
