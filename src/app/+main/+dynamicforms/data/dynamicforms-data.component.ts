import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import {
  OTranslateService,
  OFormComponent,
  Mode
} from 'ontimize-web-ng2/ontimize';

@Component({
  moduleId: module.id,
  selector: 'dynamicforms-data',
  templateUrl: 'dynamicforms-data.component.html',
  styleUrls: ['dynamicforms-data.component.css']
})
export class DynamicFormsDataComponent implements OnInit {

  @ViewChild('oForm')
  form: OFormComponent;

  constructor( ) {
  }

  ngOnInit() {

  }

  onFormDataLoaded(data) {
    // this.dynamicForm.queryData({
    //   'VERSION_ID': data['FORM_VERSION_ID']
    // });
  }

  onDynamicFormDataLoaded(data) {
    // this.form.reloadStoredData();
  }

}
