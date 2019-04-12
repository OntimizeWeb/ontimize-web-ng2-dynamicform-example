import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { OFormComponent } from 'ontimize-web-ngx';
import { ODynamicFormComponent } from 'ontimize-web-ngx-dynamicform';

@Component({
  selector: 'dynamicforms-detail',
  templateUrl: './dynamicforms-detail.component.html',
  styleUrls: ['./dynamicforms-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.dynamicforms-detail]': 'true'
  }
})
export class DynamicFormsDetailComponent {

  public jsonData: any;

  @ViewChild('oForm')
  public form: OFormComponent;

  @ViewChild('oDynamicForm')
  public dynamicForm: ODynamicFormComponent;

  public formDefinitionStoredPrivate = JSON.stringify({
    title: '',
    components: []
  });

  set formDefinitionStored(val) {
    this.formDefinitionStoredPrivate = val;
  }

  get formDefinitionStored(): string {
    return this.formDefinitionStoredPrivate;
  }

  public onFormDataLoaded(data: any): void {
    try {
      this.jsonData = JSON.parse(data.JSON);
    } catch (e) {
      //
    }
  }

  public onDynamicFormDataLoaded(data: any): void {
    (this.form as any)._updateFormData(this.form.formData);
  }

}
