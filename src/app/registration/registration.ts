import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { passwordMismatch } from '../password-validator';


@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './registration.html',
  styleUrl: './registration.scss'
})
export class Registration {

  #fb = inject(FormBuilder)
  
  formGroup = this.#fb.nonNullable.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    fiscalcode: ['', [Validators.required, Validators.minLength(16), this.fcValidator]],
    passwordGroup: this.#fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpass: ['', [Validators.required]],
    },
    {
      validators : [passwordMismatch]
    }
  ),
  })

  onSubmit() { 
    console.log('Name:', this.formGroup.value.name);
    console.log('Surname:', this.formGroup.value.surname);
    console.log('Fiscal Code:', this.formGroup.value.fiscalcode);
    console.log('Password:', this.formGroup.value.passwordGroup?.password);
    console.log('Confirm Password:', this.formGroup.value.passwordGroup?.cpass);
  }

  fcValidator (ctrl: AbstractControl): ValidationErrors | null {
    const value = ctrl.value;

    if (!value){
      return null
    }

    const fc = value.toString().toUpperCase().replace(/\s/g, '');
    const fcRegex = /^[A-Z]{6}[0-9LMNPQRTUV]{2}[ABCDEHLMPRST][0-9LMNPQRTUV]{2}[A-Z][0-9LMNPQRTUV]{3}[A-Z]$/i;

    if(!fcRegex.test(fc)){
      return { fiscalCodeInvalid : true};
    }

    return null
  }
}