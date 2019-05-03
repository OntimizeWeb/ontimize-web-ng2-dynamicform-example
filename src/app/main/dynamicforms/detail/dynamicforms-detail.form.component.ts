import { ChangeDetectorRef, Component, ElementRef, forwardRef, Injector, NgZone, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dataServiceFactory, OFormComponent, OntimizeService } from 'ontimize-web-ngx';
import { ODynamicFormBuilderComponent } from 'ontimize-web-ngx-dynamicform-builder';

@Component({
  selector: 'dynamicform-detail-form',
  providers: [
    { provide: OntimizeService, useFactory: dataServiceFactory, deps: [Injector] },
    {
      provide: OFormComponent,
      useExisting: forwardRef(() => DynamicFormDetailFormComponent)
    }
  ],
  templateUrl: './o-form.component.html',
  inputs: OFormComponent.DEFAULT_INPUTS_O_FORM,
  outputs: OFormComponent.DEFAULT_OUTPUTS_O_FORM,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.o-form]': 'true'
  }
})
export class DynamicFormDetailFormComponent extends OFormComponent {

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

  registerDynamicFormComponent(dynamicForm) { }

  unregisterDynamicFormComponent(dynamicForm) { }

  reloadStoredData() {
    this._updateFormData(this.formData);
  }

}
