import { Component, OnInit, Injector } from '@angular/core';

import { NavigationBarService } from '../shared/navigation-bar.service';

@Component({
  selector: 'app-main',
  template: require('./main.component.html'),
  styles: [require('./main.component.scss')]
})
export class MainComponent implements OnInit {

  protected sectionTitle: string = '';

  constructor(protected navigationService: NavigationBarService) { }

  ngOnInit() {
    this.navigationService.onTitleChange((title) => {
      this.sectionTitle = title;
    });
  }

}
