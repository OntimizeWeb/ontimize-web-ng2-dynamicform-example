import { Component, OnInit, NgZone, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DialogService } from 'ontimize-web-ngx';

@Component({
  selector: 'bar-menu',
  template: require('./bar-menu.component.html'),
  styles: [require('./bar-menu.component.scss')]
})
export class BarMenuComponent implements OnInit {

  ontimizeWebVersion = '1.2.3';

  public showVersionCallback: Function;

  constructor(private router: Router, private actRoute: ActivatedRoute,
    private zone: NgZone, @Inject(DialogService) private dialogService: DialogService) {
  }

  public ngOnInit() {
    this.showVersionCallback = this.showVersion.bind(this);
  }

  public showVersion() {
    this.dialogService.alert('VERSION', this.ontimizeWebVersion);
  }

}
