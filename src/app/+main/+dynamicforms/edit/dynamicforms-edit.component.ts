import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { NavigationBarService } from '../../../shared';

import {
  OTranslateService,
  OFormComponent,
  Mode
} from 'ontimize-web-ng2/ontimize';

import { ODynamicFormBuilderComponent } from 'ontimize-web-ng2-dynamicform-builder/index';
import { DynamicFormsEditFormComponent } from './dynamicforms-edit.form.component';


@Component({
  moduleId: module.id,
  selector: 'dynamicforms-edit',
  templateUrl: 'dynamicforms-edit.component.html',
  styleUrls: ['dynamicforms-edit.component.css']
})
export class DynamicFormsEditComponent implements OnInit {

  @ViewChild('oForm')
  form: DynamicFormsEditFormComponent;

  @ViewChild('oDynamicFormBuilder')
  dynamicFormBuilder: ODynamicFormBuilderComponent;

  dynamicFormDefinition: Object = {};

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

  ngAfterViewInit() {
    if (this.form && this.dynamicFormBuilder) {
      this.form.setFormBuilder(this.dynamicFormBuilder);
    }
  }

  onFormDataLoaded(data) {
    var self = this;
    setTimeout(function () {
      self.dynamicFormBuilder.formDefinition = self.form.getDataValue('JSON').value;
    }, 0);
  }

}
