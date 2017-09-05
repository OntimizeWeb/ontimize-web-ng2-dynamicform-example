import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import {
  ODynamicFormComponent
} from 'ontimize-web-ng2-dynamicform';

import { DataDetailFormComponent } from './data-detail.form.component';

@Component({
  selector: 'data-detail',
  template: require('./data-detail.component.html'),
  styles: [require('./data-detail.component.scss')],
  encapsulation: ViewEncapsulation.None
})
export class DataDetailComponent implements OnInit {

  @ViewChild('oForm')
  form: DataDetailFormComponent;

  @ViewChild('dynamicForm')
  dynamicForm: ODynamicFormComponent;

  constructor() { }

  ngOnInit() { }

  onFormDataLoaded(data) {
    this.dynamicForm.queryData({
      'VERSION_ID': data['FORM_VERSION_ID']
    });
  }

  onDynamicFormDataLoaded(data) {
    this.form.reloadStoredData();
  }

}
