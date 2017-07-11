import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import {
  OTranslateService
} from 'ontimize-web-ng2/ontimize';

import {
  ODynamicFormComponent
} from 'ontimize-web-ng2-dynamicform';

import { Router, ActivatedRoute } from '@angular/router';

import { DataDetailFormComponent } from './data-detail.form.component';
import { NavigationBarService } from '../../../shared';

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



  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService,
    protected router: Router,
    protected actRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    let title = '';
    title = this.translateService.get('INTRODUCTION');
    this.navigationService.setTitle(title);
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
