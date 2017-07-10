import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import {
  OTranslateService,
  OFormComponent
} from 'ontimize-web-ng2/ontimize';

import { Router } from '@angular/router';

import { NavigationBarService } from '../../../shared';

@Component({
  moduleId: module.id,
  selector: 'dynamicforms-detail',
  templateUrl: 'dynamicforms-detail.component.html',
  styleUrls: ['dynamicforms-detail.component.css']
})
export class DynamicFormsDetailComponent implements OnInit {
  // @ViewChild('oForm')
  // ontimizeForm: OFormComponent;
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

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService,
    protected router: Router
  ) {
  }

  onclick() {
    this.formDefinitionStored = JSON.stringify({
      'title': '',
      'components': [
        { 'attr': 'NAME', 'label': 'Nombre', 'ontimize-directive': 'o-text-input' },
        { 'attr': 'AGE', 'label': 'Edad', 'ontimize-directive': 'o-integer-input' },
        { 'attr': 'ID', 'label': 'DNI', 'ontimize-directive': 'o-nif-input' }
      ]
    });
  }

  ngOnInit() {
    let title = '';
    title = this.translateService.get('INTRODUCTION');
    this.navigationService.setTitle(title);
  }




}
