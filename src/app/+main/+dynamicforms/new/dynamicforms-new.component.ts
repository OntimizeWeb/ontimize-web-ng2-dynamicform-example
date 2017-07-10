import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';

import {
  OTranslateService,
  OFormComponent
} from 'ontimize-web-ng2/ontimize';

import { NavigationBarService } from '../../../shared';

import { ODynamicFormBuilderComponent } from 'ontimize-web-ng2-dynamicform-builder';
import { DynamicFormsNewFormComponent } from './dynamicforms-new.form.component';


@Component({
  moduleId: module.id,
  selector: 'dynamicforms-new',
  templateUrl: 'dynamicforms-new.component.html',
  styleUrls: ['dynamicforms-new.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicFormsNewComponent implements OnInit {

  @ViewChild('oForm')
  form: DynamicFormsNewFormComponent;

  @ViewChild('oDynamicFormBuilder')
  dynamicFormBuilder: ODynamicFormBuilderComponent;

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

}
