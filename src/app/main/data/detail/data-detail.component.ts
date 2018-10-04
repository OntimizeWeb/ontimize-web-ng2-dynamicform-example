import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import {
  ODynamicFormComponent
} from 'ontimize-web-ngx-dynamicform';

import { DataDetailFormComponent } from './data-detail.form.component';

@Component({
  selector: 'data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataDetailComponent implements OnInit {

  @ViewChild('oForm')
  form: DataDetailFormComponent;

  @ViewChild('dynamicForm')
  dynamicForm: ODynamicFormComponent;

  constructor() { }

  ngOnInit() { }

  onDynamicFormDataLoaded(data) {
    this.form.reloadStoredData();
  }

}
