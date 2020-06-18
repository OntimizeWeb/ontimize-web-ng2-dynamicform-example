import { ChangeDetectorRef, Component, ElementRef, forwardRef, Injector, NgZone, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEFAULT_INPUTS_O_FORM, DEFAULT_OUTPUTS_O_FORM, OFormComponent, OntimizeServiceProvider } from 'ontimize-web-ngx';
import { ODynamicFormBuilderComponent } from 'ontimize-web-ngx-dynamicform-builder';

@Component({
  selector: 'dynamicforms-data-form',
  providers: [
    OntimizeServiceProvider,
    {
      provide: OFormComponent,
      useExisting: forwardRef(() => DynamicFormsDataFormComponent)
    }
  ],
  templateUrl: './o-form.component.html',
  inputs: DEFAULT_INPUTS_O_FORM,
  outputs: DEFAULT_OUTPUTS_O_FORM,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.o-form]': 'true'
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
