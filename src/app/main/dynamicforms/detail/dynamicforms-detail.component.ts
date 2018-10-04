import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import {
  OFormComponent
} from 'ontimize-web-ngx';

import {
  ODynamicFormComponent
} from 'ontimize-web-ngx-dynamicform';

@Component({
  selector: 'dynamicforms-detail',
  templateUrl: './dynamicforms-detail.component.html',
  styleUrls: ['./dynamicforms-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicFormsDetailComponent implements OnInit {

  jsonData: any;

  @ViewChild('oForm')
  form: OFormComponent;

  @ViewChild('oDynamicForm')
  dynamicForm: ODynamicFormComponent;

  formDefinitionStoredPrivate = JSON.stringify({
    'title': '',
    'components': []
  });

  set formDefinitionStored(val) {
    this.formDefinitionStoredPrivate = val;
  }

  get formDefinitionStored() {
    return this.formDefinitionStoredPrivate;
  }

  constructor() { }

  ngOnInit() { }

  onFormDataLoaded(data) {
    try {
      this.jsonData = JSON.parse(data.JSON);
    } catch (e) {

    }
    // this.dynamicForm.queryData({
    //   'VERSION_ID': data['VERSION_ID']
    // });
  }

  onDynamicFormDataLoaded(data) {
    (this.form as any)._updateFormData(this.form.formData);
  }

}
