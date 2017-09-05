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

  updating = false;
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

  // TODO: fix Mode import
  // setFormMode(mode: Mode) {
  setFormMode(mode) {
    // use the event emmiter in form mode change for doing this
    super.setFormMode(mode);
    this.setDynamicFormBuilderMode();
  }

  setDynamicFormBuilderMode() {
    if (this.dynamicFormBuilder) {
      // TODO: fix Mode import
      // const editable = (this.mode === Mode.INSERT) || (this.mode === Mode.UPDATE);
      const editable = (this.mode === 1) || (this.mode === 2);
      this.dynamicFormBuilder.isReadOnly = !editable;
    }
  }

  setFormBuilder(builder: ODynamicFormBuilderComponent) {
    this.dynamicFormBuilder = builder;
    this.setDynamicFormBuilderMode();
  }

  public getAttributesValuesToUpdate(): Object {
    let values = super.getAttributesValuesToUpdate();
    if (this.dynamicFormBuilder) {
      let json: any = this.dynamicFormBuilder.formDefinition;
      values['JSON'] = JSON.stringify(json);
    }
    return values;
  }

  _closeDetailAction() {
    if (!this.updating) {
      super._closeDetailAction();
    }
    this.updating = false;
  }

  postCorrectUpdate(data) {
    this.updating = true;
    console.log('[OFormComponent.postCorrectUpdate]', data);
    let route = [];
    route.push('dynamicforms');
    route.push(data['VERSION_ID']);
    this.router.navigate(
      route,
      {
        queryParams: {
          'isdetail': 'true'
        }
      }
    );
  }

}
