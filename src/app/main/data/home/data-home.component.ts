import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'data-home',
  template: require('./data-home.component.html'),
  styles: [require('./data-home.component.scss')]
})
export class DataHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
