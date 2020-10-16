import { ChangeDetectorRef, Component, ElementRef, forwardRef, Injector, NgZone, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEFAULT_INPUTS_O_FORM, DEFAULT_OUTPUTS_O_FORM, OFormComponent, OntimizeServiceProvider } from 'ontimize-web-ngx';

@Component({
  selector: 'dynamicform-detail-form',
  providers: [
    OntimizeServiceProvider,
    {
      provide: OFormComponent,
      useExisting: forwardRef(() => DynamicFormDetailFormComponent)
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
export class DynamicFormDetailFormComponent extends OFormComponent {

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

  update() {
    Object.keys(this.formGroup.controls).forEach(
      (control) => {
        this.formGroup.controls[control].markAsTouched();
      }
    );

    if (!this.formGroup.valid) {
      this.dialogService.alert('ERROR', 'MESSAGES.FORM_VALIDATION_ERROR');
      return;
    }

    // retrieving keys...
    const filter = this.getKeysValues();

    // retrieving values to update...
    const values = this.getAttributesValuesToUpdate();
    const sqlTypes = this.getAttributesSQLTypes();

    if (Object.keys(values).length === 0) {
      // Nothing to update
      this.dialogService.alert('INFO', 'MESSAGES.FORM_NOTHING_TO_UPDATE_INFO');
      return;
    }

    // invoke update method...
    this.updateData(filter, values, sqlTypes).subscribe(resp => {
      this.postCorrectUpdate(resp);
    }, error => {
      this.postIncorrectUpdate(error);
    });
  }

}
