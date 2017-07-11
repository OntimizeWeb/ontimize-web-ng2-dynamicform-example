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
  OFormComponent,
  Mode
} from 'ontimize-web-ng2/ontimize';

import { ODynamicFormBuilderComponent } from 'ontimize-web-ng2-dynamicform-builder';

@OComponent({
  selector: 'dynamicforms-edit-form',
  providers: [
    {
      provide: OFormComponent,
      useExisting: forwardRef(() => DynamicFormsEditFormComponent)
    }
  ],
  inputs: [
    ...OFormComponent.DEFAULT_INPUTS_O_FORM
  ]
})

export class DynamicFormsEditFormComponent extends OFormComponent {

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

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  setFormMode(mode: Mode) {
    // use the event emmiter in form mode change for doing this
    super.setFormMode(mode);
    this.setDynamicFormBuilderMode();
  }

  setDynamicFormBuilderMode() {
    if (this.dynamicFormBuilder) {
      const editable = (this.mode === Mode.INSERT) || (this.mode === Mode.UPDATE);
      this.dynamicFormBuilder.isReadOnly = !editable;
    }
  }

  setFormBuilder(builder: ODynamicFormBuilderComponent) {
    this.dynamicFormBuilder = builder;
    this.setDynamicFormBuilderMode();
  }

  protected getAttributesValuesToUpdate(): Object {
    let values = super.getAttributesValuesToUpdate();
    if (this.dynamicFormBuilder) {
      let json: any = this.dynamicFormBuilder.formDefinition;
      values['JSON'] = JSON.stringify(json);
    }
    return values;
  }

}
