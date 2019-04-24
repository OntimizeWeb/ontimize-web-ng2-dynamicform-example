import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dynamicforms-home',
  templateUrl: './dynamicforms-home.component.html',
  styleUrls: ['./dynamicforms-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicFormsHomeComponent {

  constructor(
    protected router: Router,
    protected actRoute: ActivatedRoute
  ) { }

  public editDynamicFormData(item: any) {
    if (item.hasOwnProperty('VERSION_ID')) {
      const route = [item['VERSION_ID']];
      route.push('data');
      this.router.navigate(
        route,
        {
          relativeTo: this.actRoute,
          queryParams: {
            isdetail: 'true'
          }
        }
      );
    }
  }

  public addDynamicFormData(item: any) {
    if (item && item.hasOwnProperty('VERSION_ID')) {
      const route = [item['VERSION_ID']];
      route.push('data');
      this.router.navigate(
        route,
        {
          relativeTo: this.actRoute,
          queryParams: {
            isdetail: 'true'
          }
        }
      );
    }
  }

}
