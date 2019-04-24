import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ODynamicFormComponent } from 'ontimize-web-ngx-dynamicform';

import { DataDetailFormComponent } from './data-detail.form.component';

@Component({
  selector: 'data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.data-detail]': 'true'
  }
})
export class DataDetailComponent {

  @ViewChild('oForm')
  public form: DataDetailFormComponent;

  @ViewChild('dynamicForm')
  public dynamicForm: ODynamicFormComponent;

  public onDynamicFormDataLoaded(data: any): void {
    this.form.reloadStoredData();
  }

}
