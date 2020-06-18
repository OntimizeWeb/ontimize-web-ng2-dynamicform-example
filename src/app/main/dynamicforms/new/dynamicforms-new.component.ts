import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ODynamicFormBuilderComponent } from 'ontimize-web-ngx-dynamicform-builder';

import { DynamicFormsNewFormComponent } from './dynamicforms-new.form.component';

@Component({
  selector: 'dynamicforms-new',
  templateUrl: './dynamicforms-new.component.html',
  styleUrls: ['./dynamicforms-new.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicFormsNewComponent implements AfterViewInit {

  @ViewChild('oForm', { static: false })
  public form: DynamicFormsNewFormComponent;

  @ViewChild('oDynamicFormBuilder', { static: false })
  public dynamicFormBuilder: ODynamicFormBuilderComponent;

  public ngAfterViewInit(): void {
    if (this.form && this.dynamicFormBuilder) {
      this.form.setFormBuilder(this.dynamicFormBuilder);
    }
  }

}
