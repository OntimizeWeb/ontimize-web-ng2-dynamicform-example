import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import {
  OTranslateService,
  OFormComponent
} from 'ontimize-web-ngx';

@Component({
  selector: 'dynamicforms-data',
  template: require('./dynamicforms-data.component.html'),
  styles: [require('./dynamicforms-data.component.scss')],
  encapsulation: ViewEncapsulation.None
})
export class DynamicFormsDataComponent implements OnInit {

  @ViewChild('oForm')
  form: OFormComponent;

  constructor() { }

  ngOnInit() { }

  onFormDataLoaded(data) {
    // this.dynamicForm.queryData({
    //   'VERSION_ID': data['FORM_VERSION_ID']
    // });
  }

  onDynamicFormDataLoaded(data) {
    // this.form.reloadStoredData();
  }

}
