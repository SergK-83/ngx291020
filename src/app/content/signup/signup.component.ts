import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ValidationService} from '../../shared/services/validation.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // public signUpForm = new FormGroup({
  //   username: new FormControl({value: 'Serg', disabled: true}, [Validators.required, Validators.minLength(4)]),
  //   password: new FormGroup({
  //     password: new FormControl(''),
  //     cpassword: new FormControl(''),
  //   }),
  // });

  public signUpForm = this.fb.group({
    username: ['', this.validationService.usernameSpecialSymbols, this.validationService.uniqueUserName.bind(this.validationService)],
    emails: this.fb.array(['']),
    password: this.fb.group({
      password: [''],
      cpassword: [''],
    }, {
      validators: [this.validationService.equalValidator]
    }),
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private validationService: ValidationService,
  ) {
  }

  ngOnInit(): void {

    console.log(this.router.config); // !!!

    // setTimeout(() => {
    //   const jsonRes = {
    //     username: '',
    //     password: ''
    //   };
    //   this.signUpForm = new FormGroup(Object.entries(jsonRes)
    //     .reduce((form, [key, value]) => {
    //       return {...form, [key]: new FormControl(value, [Validators.required, Validators.minLength(4)])} as any;
    //     }, {}));
    // }, 2000);

    setTimeout(() => {
      this.signUpForm.get('username')?.enable();
    }, 3000);

    // можно налету перезаписывать routings
    // this.router.resetConfig([
    //   {
    //      path: 'dashboard'
    //   }
    // ]);

  }

  public signup(user: any): any {
    console.log(user);

    return this.http.post('/checkUsername', user).subscribe();
  }

  public goToLogin(): void {
    this.router.navigate(['/login']);
  }

  public getControl(name: any): FormControl {
    return this.signUpForm.get(name) as FormControl;
  }

  public getControls(form: FormGroup, name: any): AbstractControl[] {
    return (form.get(name) as FormArray).controls;
  }

  public addEmail(): void {
    (this.signUpForm.get('emails') as FormArray).push(this.fb.control(''));
  }

  public removeEmail(index: number): void {
    (this.signUpForm.get('mails') as FormArray).removeAt(index);
  }

  public toControl(control: AbstractControl): FormControl {
    return control as FormControl;
  }
}
