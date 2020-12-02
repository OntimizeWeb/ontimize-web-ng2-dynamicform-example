import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dynamicforms-detail',
  templateUrl: './dynamicforms-detail.component.html',
  styleUrls: ['./dynamicforms-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.dynamicforms-detail]': 'true'
  }
})
export class DynamicFormsDetailComponent {

  constructor(protected router: Router, protected actRoute: ActivatedRoute) { }

  formUpdated(data) {
    const route = [];
    route.push('dynamicforms');
    route.push(data['VERSION_ID']);
    this.router.navigate(
      route,
      {
        replaceUrl: true,
        queryParams: {
          isdetail: 'true'
        }
      }
    );
  }

}
