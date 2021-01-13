import { Injectable } from '@angular/core';
import {FormControl, ValidationErrors} from '@angular/forms';

@Injectable()
export class ValidationService {

  constructor() { }

  public usernameSpecialSymbols(control: FormControl): ValidationErrors | null {
    const valid = /^[a-zA-Z]*$/.test(control.value);

    return  valid ? null : {username: 'Should contains only letters'};
  }
}
