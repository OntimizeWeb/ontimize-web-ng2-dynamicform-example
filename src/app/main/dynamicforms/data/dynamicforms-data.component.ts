import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'dynamicforms-data',
  templateUrl: './dynamicforms-data.component.html',
  styleUrls: ['./dynamicforms-data.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.dynamicforms-data]': 'true'
  }
})
export class DynamicFormsDataComponent {

  @ViewChild('oForm', { static: false })
  public form: OFormComponent;

  public onDynamicFormDataLoaded(data: any): void {
    // this.form.reloadStoredData();
  }

}
