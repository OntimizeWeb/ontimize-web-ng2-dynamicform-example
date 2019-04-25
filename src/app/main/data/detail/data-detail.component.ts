import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

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

  public onDynamicFormDataLoaded(data: any): void {
    this.form.reloadStoredData();
  }

}
