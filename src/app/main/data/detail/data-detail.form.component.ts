import {
  Injector,
  forwardRef,
  NgZone,
  ChangeDetectorRef,
  ElementRef
} from '@angular/core';

import {
  Router,
  ActivatedRoute
} from '@angular/router';

import {
  OComponent,
  OFormComponent
} from 'ontimize-web-ng2';

import { ODynamicFormBuilderComponent } from 'ontimize-web-ng2-dynamicform-builder';

@OComponent({
  selector: 'data-detail-form',
  providers: [
    {
      provide: OFormComponent,
      useExisting: forwardRef(() => DataDetailFormComponent)
    }
  ],
  inputs: [
    ...OFormComponent.DEFAULT_INPUTS_O_FORM
  ]
})
export class DataDetailFormComponent extends OFormComponent {

  dynamicFormBuilder: ODynamicFormBuilderComponent;

  constructor(
    router: Router,
    actRoute: ActivatedRoute,
    zone: NgZone,
    cd: ChangeDetectorRef,
    injector: Injector,
    elRef: ElementRef
  ) {
    super(router, actRoute, zone, cd, injector, elRef);
  }

  public getAttributesValuesToUpdate(): Object {
    let values = {};
    var self = this;
    // getting all controns (not only dirty ones)
    Object.keys(this.formGroup.controls).forEach(function (item) {
      values[item] = self.formGroup.value[item];
    });
    values['FORM_VERSION_ID'] = this.urlParams['VERSION_ID'];
    return values;
  }

  registerDynamicFormComponent(dynamicForm) { }

  unregisterDynamicFormComponent(dynamicForm) { }

  reloadStoredData() {
    this._updateFormData(this.formData);
  }

}
