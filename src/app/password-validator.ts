import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

export function passwordMismatch(ctrl: AbstractControl): ValidationErrors | null {
  const control = ctrl as FormGroup;
    const password = control.controls?.['password']?.value;
    const confirm_password = control.controls?.['cpass']?.value;

    if (password !== confirm_password) {
      return {passwordMismatch : true }
    }
    return null
  }
@Directive({
  selector: '[appPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting : PasswordValidator,
      multi: true
    }
  ]
})
export class PasswordValidator implements Validator { 
  validate = passwordMismatch
}
