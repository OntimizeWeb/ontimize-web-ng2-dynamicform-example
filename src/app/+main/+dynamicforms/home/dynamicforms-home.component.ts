import {
  ViewChild,
  Component,
  OnInit
} from '@angular/core';

import {
  OTableComponent,
  OFormComponent

} from 'ontimize-web-ng2/ontimize';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'dynamicforms-home',
  templateUrl: 'dynamicforms-home.component.html',
  styleUrls: ['dynamicforms-home.component.css']
})
export class DynamicFormsHomeComponent implements OnInit {
  @ViewChild('table')
  table: OTableComponent;
  constructor(
    protected router: Router,
    protected actRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {

  }


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
