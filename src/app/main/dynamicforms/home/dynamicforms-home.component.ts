import {
  ViewChild,
  Component,
  OnInit
} from '@angular/core';

import {
  OTableComponent,
  OFormComponent
} from 'ontimize-web-ng2';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dynamicforms-home',
  template: require('./dynamicforms-home.component.html'),
  styles: [require('./dynamicforms-home.component.scss')]
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

}
