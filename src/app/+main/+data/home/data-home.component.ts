import {
  Component,
  OnInit
} from '@angular/core';

import {
  OTranslateService,
  OFormComponent
} from 'ontimize-web-ng2/ontimize';

import { Router, ActivatedRoute } from '@angular/router';

import { NavigationBarService } from '../../../shared';

@Component({
  moduleId: module.id,
  selector: 'data-home',
  templateUrl: 'data-home.component.html',
  styleUrls: ['data-home.component.css']
})
export class DataHomeComponent implements OnInit {

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
  }

}
