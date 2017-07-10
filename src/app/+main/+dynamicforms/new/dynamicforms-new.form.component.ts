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
} from 'ontimize-web-ng2/ontimize';

import { ODynamicFormBuilderComponent } from 'ontimize-web-ng2-dynamicform-builder';

@OComponent({
  selector: 'dynamicforms-new-form',
  providers: [
    {
      provide: OFormComponent,
      useExisting: forwardRef(() => DynamicFormsNewFormComponent)
    }
  ],
  inputs: [
    ...OFormComponent.DEFAULT_INPUTS_O_FORM
  ]
})

export class DynamicFormsNewFormComponent extends OFormComponent {

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

  protected getAttributesValuesToInsert(): Object {
    let attrValues = super.getAttributesValuesToInsert();
    if (this.dynamicFormBuilder) {
      let json: any = this.dynamicFormBuilder.formDefinition;
      if (json.components.length) {
        attrValues['JSON'] = JSON.stringify(json);
      }
    }
    attrValues['FORM_NAME'] = 'TEST';
    return attrValues;
  }

  setFormBuilder(builder: ODynamicFormBuilderComponent) {
    this.dynamicFormBuilder = builder;
  }

}
