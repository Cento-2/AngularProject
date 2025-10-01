import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCustomValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting : CustomValidator,
      multi: true
    }
  ]
})
export class CustomValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const valid = control.value?.endsWith('789');
    return valid ? null : { customFormat: true};
}

  constructor() { }

}
