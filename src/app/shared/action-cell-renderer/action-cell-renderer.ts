import { Component, Injector, ViewChild, TemplateRef, EventEmitter } from '@angular/core';
import { OBaseTableCellRenderer } from 'ontimize-web-ngx';

export const DEFAULT_INPUTS_ACTION_CELL_RENDERER = [
  'icon',
  'action'
];

export const DEFAULT_OUTPUTS_ACTION_CELL_RENDERER = [
  'onClick'
];


@Component({
  selector: 'action-cell-renderer',
  templateUrl: './action-cell-renderer.html',
  inputs: DEFAULT_INPUTS_ACTION_CELL_RENDERER,
  outputs: DEFAULT_OUTPUTS_ACTION_CELL_RENDERER
})

export class ActionCellRendererComponent extends OBaseTableCellRenderer {

  onClick: EventEmitter<Object> = new EventEmitter<Object>();
  action: string;
  _icon: string;

  @ViewChild('templateref', { read: TemplateRef }) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector) {
    super(injector);
    // mover al constructor del OBaseTableCellRenderer ?
    // this.initialize();
  }

  getCellData(value: any) {
    return value;
  }

  innerOnClick(event, rowData) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.onClick.emit(rowData);
    // if (typeof (this.action) !== 'undefined') {
    //   switch (this.action.toLowerCase()) {
    //     case 'detail':
    //       this.tableColumn.viewDetail(rowData);
    //       break;
    //     case 'edit':
    //       this.tableColumn.editDetail(rowData);
    //       break;
    //     default:
    //       break;
    //   }
    // }
  }

  get icon(): string {
    return this._icon;
  }

  set icon(arg: string) {
    this._icon = arg;
  }
}
