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

import { Router } from '@angular/router';

import { NavigationBarService } from '../../../shared';

@Component({
  moduleId: module.id,
  selector: 'dynamicforms-data',
  templateUrl: 'dynamicforms-data.component.html',
  styleUrls: ['dynamicforms-data.component.css']
})
export class DynamicFormsDataComponent implements OnInit {

  @ViewChild('oForm')
  form: OFormComponent;

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService,
    protected router: Router
  ) {
  }

  ngOnInit() {
    let title = '';
    title = this.translateService.get('INTRODUCTION');
    this.navigationService.setTitle(title);
  }

  // ngAfterViewInit() {
  //   this.form.setFormMode(Mode.UPDATE);
  // }

  onFormDataLoaded(data) {
    // this.dynamicForm.queryData({
    //   'VERSION_ID': data['FORM_VERSION_ID']
    // });
  }

  onDynamicFormDataLoaded(data) {
    // this.form.reloadStoredData();
  }

}
