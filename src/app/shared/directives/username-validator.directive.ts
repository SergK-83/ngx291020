import { Directive } from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appUsernameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UsernameValidatorDirective,
      multi: true
    }
  ]
})
export class UsernameValidatorDirective implements Validator{

  public validate(control: FormControl): ValidationErrors | null {
    const valid = /^[a-zA-Z]*$/.test(control.value);

    return  valid ? null : {username: 'Should contains only letters'};
  }
}
