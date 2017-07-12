import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import {
  OFormComponent
} from 'ontimize-web-ng2/ontimize';

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

  constructor() {
  }

  ngOnInit() {

  }

}
