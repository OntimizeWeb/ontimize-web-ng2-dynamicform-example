import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import {
  OFormComponent
} from 'ontimize-web-ngx';

import { ODynamicFormBuilderComponent } from 'ontimize-web-ngx-dynamicform-builder';
import { DynamicFormsNewFormComponent } from './dynamicforms-new.form.component';

@Component({
  selector: 'dynamicforms-new',
  template: require('./dynamicforms-new.component.html'),
  styles: [require('./dynamicforms-new.component.scss')],
  encapsulation: ViewEncapsulation.None
})
export class DynamicFormsNewComponent implements OnInit {

  @ViewChild('oForm')
  form: DynamicFormsNewFormComponent;

  @ViewChild('oDynamicFormBuilder')
  dynamicFormBuilder: ODynamicFormBuilderComponent;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    if (this.form && this.dynamicFormBuilder) {
      this.form.setFormBuilder(this.dynamicFormBuilder);
    }
  }

}
