import { ChangeDetectorRef, Component, ElementRef, forwardRef, Injector, NgZone, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEFAULT_INPUTS_O_FORM, DEFAULT_OUTPUTS_O_FORM, OFormComponent, OntimizeServiceProvider } from 'ontimize-web-ngx';
import { ODynamicFormBuilderComponent } from 'ontimize-web-ngx-dynamicform-builder';

// @OComponent({
//   selector: 'data-detail-form',
//   providers: [
//     {
//       provide: OFormComponent,
//       useExisting: forwardRef(() => DataDetailFormComponent)
//     }
//   ],
//   inputs: [
//     ...OFormComponent.DEFAULT_INPUTS_O_FORM
//   ]
// })
@Component({
  selector: 'data-detail-form',
  providers: [
    OntimizeServiceProvider,
    {
      provide: OFormComponent,
      useExisting: forwardRef(() => DataDetailFormComponent)
    }
  ],
  templateUrl: './o-form.component.html',
  inputs: DEFAULT_INPUTS_O_FORM,
  outputs: DEFAULT_OUTPUTS_O_FORM,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.o-form]': 'true',
    '[class.fill]': 'layoutFill'
  }
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
    values['FORM_VERSION_ID'] = this.getFormNavigation().getUrlParams()['VERSION_ID'];
    return values;
  }

  registerDynamicFormComponent(dynamicForm) { }

  unregisterDynamicFormComponent(dynamicForm) { }

  reloadStoredData() {
    this._updateFormData(this.formData);
  }

}
