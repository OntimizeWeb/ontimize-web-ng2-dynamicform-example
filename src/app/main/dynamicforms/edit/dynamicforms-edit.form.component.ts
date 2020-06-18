import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Injector,
  NgZone,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEFAULT_INPUTS_O_FORM, DEFAULT_OUTPUTS_O_FORM, OFormComponent, OntimizeServiceProvider } from 'ontimize-web-ngx';
import { ODynamicFormBuilderComponent } from 'ontimize-web-ngx-dynamicform-builder';

@Component({
  selector: 'dynamicforms-edit-form',
  providers: [
    OntimizeServiceProvider,
    {
      provide: OFormComponent,
      useExisting: forwardRef(() => DynamicFormsEditFormComponent)
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
export class DynamicFormsEditFormComponent extends OFormComponent implements AfterViewInit {

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
