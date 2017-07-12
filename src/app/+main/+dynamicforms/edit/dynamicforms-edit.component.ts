import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {
  OFormComponent,
  Mode
} from 'ontimize-web-ng2/ontimize';

import { ODynamicFormBuilderComponent } from 'ontimize-web-ng2-dynamicform-builder/index';
import { DynamicFormsEditFormComponent } from './dynamicforms-edit.form.component';


@Component({
  moduleId: module.id,
  selector: 'dynamicforms-edit',
  templateUrl: 'dynamicforms-edit.component.html',
  styleUrls: ['dynamicforms-edit.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class DynamicFormsEditComponent implements OnInit {

  @ViewChild('oForm')
  form: DynamicFormsEditFormComponent;

  @ViewChild('oDynamicFormBuilder')
  dynamicFormBuilder: ODynamicFormBuilderComponent;

  dynamicFormDefinition: Object = {};

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.form && this.dynamicFormBuilder) {
      this.form.setFormBuilder(this.dynamicFormBuilder);
    }
  }


}
