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
  templateUrl: './dynamicforms-data.component.html',
  styleUrls: ['./dynamicforms-data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicFormsDataComponent implements OnInit {

  @ViewChild('oForm')
  form: OFormComponent;

  constructor() { }

  ngOnInit() { }

  onDynamicFormDataLoaded(data) {
    // this.form.reloadStoredData();
  }

}
