import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { passwordMismatch } from '../password-validator';
import { combineLatestWith, filter, fromEvent, interval, map, of, take } from 'rxjs';

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
        validators: [passwordMismatch]
      }
    ),
  })
  constructor() {
    // const numbers = interval(5000);
    // const takeFourNumbers = numbers.pipe(take(11));
    // takeFourNumbers.subscribe(x => console.log('Count: ', x));
    const arrayObservable = of([1,2,3,4,5]);
    const numbers = interval(5000);
    const takeNumbers = numbers.pipe(
      take(10),
      filter (x => x % 3 === 0),
      combineLatestWith(arrayObservable),
      map(([numbers, array])=>({
        originalNumber : numbers,
        multipliedResults: array.map(element => element * numbers)
      }))
    );

    takeNumbers.subscribe(results =>{
      console.log("Number: ", results.originalNumber),
      console.log("Multiplication results: ", results.multipliedResults)
    })

    fromEvent<KeyboardEvent>(document, 'keydown').subscribe({
      next: (event: KeyboardEvent) => {
        if (event.key === 'W') {
          console.log("You pressed the W key");
        }
      }
    })
  }

  onSubmit() {
    console.log('Name:', this.formGroup.value.name);
    console.log('Surname:', this.formGroup.value.surname);
    console.log('Fiscal Code:', this.formGroup.value.fiscalcode);
    console.log('Password:', this.formGroup.value.passwordGroup?.password);
    console.log('Confirm Password:', this.formGroup.value.passwordGroup?.cpass);
  }

  fcValidator(ctrl: AbstractControl): ValidationErrors | null {
    const value = ctrl.value;

    if (!value) {
      return null
    }

    const fc = value.toString().toUpperCase().replace(/\s/g, '');
    const fcRegex = /^[A-Z]{6}[0-9LMNPQRTUV]{2}[ABCDEHLMPRST][0-9LMNPQRTUV]{2}[A-Z][0-9LMNPQRTUV]{3}[A-Z]$/i;

    if (!fcRegex.test(fc)) {
      return { fiscalCodeInvalid: true };
    }

    return null
  }
}