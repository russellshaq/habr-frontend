import {AbstractControl, AsyncValidator, FormGroup, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ValidateFn} from 'codelyzer/walkerFactory/walkerFn';

export class FieldsMatchValidator {
  static match(fieldOne: string, fieldTwo: string){
    return (control: FormGroup) => {
      if (control.value[fieldOne] === control.value[fieldTwo]) {
        return null;
      }
      return {noMatch: true};
    };
  }
}
