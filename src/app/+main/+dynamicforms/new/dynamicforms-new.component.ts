import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import {
  OFormComponent
} from 'ontimize-web-ng2/ontimize';

import { ODynamicFormBuilderComponent } from 'ontimize-web-ng2-dynamicform-builder';
import { DynamicFormsNewFormComponent } from './dynamicforms-new.form.component';


@Component({
  moduleId: module.id,
  selector: 'dynamicforms-new',
  templateUrl: 'dynamicforms-new.component.html',
  styleUrls: ['dynamicforms-new.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicFormsNewComponent implements OnInit {

  @ViewChild('oForm')
  form: DynamicFormsNewFormComponent;

  @ViewChild('oDynamicFormBuilder')
  dynamicFormBuilder: ODynamicFormBuilderComponent;

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
