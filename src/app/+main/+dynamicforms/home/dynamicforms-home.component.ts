import {
  Component,
  OnInit
  // ,
  // ViewChild
} from '@angular/core';

import {
  OTranslateService,
  OFormComponent
  // ,
  // OTableComponent
} from 'ontimize-web-ng2/ontimize';

import { Router, ActivatedRoute } from '@angular/router';

import { NavigationBarService } from '../../../shared';

@Component({
  moduleId: module.id,
  selector: 'dynamicforms-home',
  templateUrl: 'dynamicforms-home.component.html',
  styleUrls: ['dynamicforms-home.component.css']
})
export class DynamicFormsHomeComponent implements OnInit {

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService,
    protected router: Router,
    protected actRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    let title = '';
    title = this.translateService.get('INTRODUCTION');
    this.navigationService.setTitle(title);
    // this.table.onTableDataLoaded.subscribe(data => {
    //   this.table.selectRowsByData([{ VERSION_ID: 1 }], true);
    // });
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
