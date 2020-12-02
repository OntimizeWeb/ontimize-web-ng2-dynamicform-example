import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dynamicforms-new',
  templateUrl: './dynamicforms-new.component.html',
  styleUrls: ['./dynamicforms-new.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.dynamicforms-new]': 'true'
  }
})
export class DynamicFormsNewComponent {

}
