import {
  ViewChild,
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { OFormComponent, OTableComponent } from 'ontimize-web-ngx';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dynamicforms-home',
  templateUrl: './dynamicforms-home.component.html',
  styleUrls: ['./dynamicforms-home.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class DynamicFormsHomeComponent implements OnInit {

  @ViewChild('table')
  table: OTableComponent;

  constructor(
    protected router: Router,
    protected actRoute: ActivatedRoute
  ) { }

  ngOnInit() { }

  editDynamicFormData(item: any) {
    if (item.hasOwnProperty('VERSION_ID')) {
      let route = [item['VERSION_ID']];
      route.push('data');
      this.router.navigate(
        route,
        {
          relativeTo: this.actRoute,
          queryParams: {
            'isdetail': 'true'
          }
        }
      );
    }
  }

  addDynamicFormData(item: any) {
    if (item && item.hasOwnProperty('VERSION_ID')) {
      let route = [item['VERSION_ID']];
      route.push('data');
      this.router.navigate(
        route,
        {
          relativeTo: this.actRoute,
          queryParams: {
            'isdetail': 'true'
          }
        }
      );
    }
  }

}
