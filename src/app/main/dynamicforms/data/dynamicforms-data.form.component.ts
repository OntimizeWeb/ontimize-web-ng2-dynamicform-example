import { Injector, forwardRef, NgZone, ChangeDetectorRef, ElementRef, Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OComponent, OFormComponent, OntimizeService, dataServiceFactory } from 'ontimize-web-ngx';
import { ODynamicFormBuilderComponent } from 'ontimize-web-ngx-dynamicform-builder';

// @OComponent({
//   selector: 'dynamicforms-data-form',
//   providers: [
//     {
//       provide: OFormComponent,
//       useExisting: forwardRef(() => DynamicFormsDataFormComponent)
//     }
//   ],
//   inputs: [
//     ...OFormComponent.DEFAULT_INPUTS_O_FORM
//   ]
// })

@Component({
  selector: 'dynamicforms-data-form',
  providers: [
    { provide: OntimizeService, useFactory: dataServiceFactory, deps: [Injector] },
    {
      provide: OFormComponent,
      useExisting: forwardRef(() => DynamicFormsDataFormComponent)
    }
  ],
  templateUrl: './o-form.component.html',
  inputs: OFormComponent.DEFAULT_INPUTS_O_FORM,
  outputs: OFormComponent.DEFAULT_OUTPUTS_O_FORM,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.o-form]': 'true',
    '[class.fill]': 'layoutFill'
  }
})
export class DynamicFormsDataFormComponent extends OFormComponent {

  dynamicFormBuilder: ODynamicFormBuilderComponent;
  inserting = false;
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

  // getAttributesValuesToUpdate(): Object {
  //   let values = {};
  //   var self = this;
  //   // getting all controns (not only dirty ones)
  //   Object.keys(this.formGroup.controls).forEach(function (item) {
  //     values[item] = self.formGroup.value[item];
  //   });
  //   values['FORM_VERSION_ID'] = this.urlParams['VERSION_ID'];
  //   return values;
  // }

  getAttributesValuesToInsert(): Object {
    let values = {};
    var self = this;
    // getting all controns (not only dirty ones)
    Object.keys(this.formGroup.controls).forEach(function (item) {
      values[item] = self.formGroup.value[item];
    });
    values['FORM_VERSION_ID'] = this.getFormNavigation().getUrlParams()['VERSION_ID'];
    return values;
  }

  determinateFormMode() {
    // TODO: fix Mode import
    // this.setFormMode(Mode.INSERT);
    this.setFormMode(1);
  }

  _closeDetailAction() {
    if (!this.inserting) {
      super._closeDetailAction();
    }
    this.inserting = false;
  }

  postCorrectInsert(result: any) {
    this.inserting = true;
    console.log('[OFormComponent.postCorrectInsert]', result);
    this.router.navigate(['/main/data', result['DATA_ID']]);
    let route = [];
    route.push('main');
    route.push('data');
    route.push(result['DATA_ID']);
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
