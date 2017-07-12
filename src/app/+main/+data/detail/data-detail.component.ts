import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import {
  ODynamicFormComponent
} from 'ontimize-web-ng2-dynamicform';

import { DataDetailFormComponent } from './data-detail.form.component';

@Component({
  moduleId: module.id,
  selector: 'data-detail',
  templateUrl: 'data-detail.component.html',
  styleUrls: ['data-detail.component.css']
})
export class DataDetailComponent implements OnInit {

  @ViewChild('oForm')
  form: DataDetailFormComponent;

  @ViewChild('dynamicForm')
  dynamicForm: ODynamicFormComponent;


  constructor() {
  }

  ngOnInit() {
  }

  onFormDataLoaded(data) {
    this.dynamicForm.queryData({
      'VERSION_ID': data['FORM_VERSION_ID']
    });
  }

  onDynamicFormDataLoaded(data) {
    this.form.reloadStoredData();
  }
}
