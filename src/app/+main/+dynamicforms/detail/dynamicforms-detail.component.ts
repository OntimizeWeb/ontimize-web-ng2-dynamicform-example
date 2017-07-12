import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import {
  OFormComponent
} from 'ontimize-web-ng2/ontimize';

import {
  ODynamicFormComponent
} from 'ontimize-web-ng2-dynamicform';

@Component({
  moduleId: module.id,
  selector: 'dynamicforms-detail',
  templateUrl: 'dynamicforms-detail.component.html',
  styleUrls: ['dynamicforms-detail.component.css']
})
export class DynamicFormsDetailComponent implements OnInit {
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

  constructor() {
  }

  ngOnInit() {

  }

  onFormDataLoaded(data) {
    this.dynamicForm.queryData({
      'VERSION_ID': data['VERSION_ID']
    });
  }
  onDynamicFormDataLoaded(data) {
    (this.form as any)._updateFormData(this.form.formData);
  }

}
