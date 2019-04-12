import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ODynamicFormBuilderComponent } from 'ontimize-web-ngx-dynamicform-builder';

import { DynamicFormsEditFormComponent } from './dynamicforms-edit.form.component';

@Component({
  selector: 'dynamicforms-edit',
  templateUrl: './dynamicforms-edit.component.html',
  styleUrls: ['./dynamicforms-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.dynamicforms-edit]': 'true'
  }
})
export class DynamicFormsEditComponent {

  @ViewChild('oForm')
  public form: DynamicFormsEditFormComponent;

  @ViewChild('oDynamicFormBuilder')
  public dynamicFormBuilder: ODynamicFormBuilderComponent;

  public dynamicFormDefinition: Object = {};

  public ngAfterViewInit(): void {
    if (this.form && this.dynamicFormBuilder) {
      this.form.setFormBuilder(this.dynamicFormBuilder);
    }
  }

  public onRender(arg: any): void {
    console.log(arg);
  }

}
