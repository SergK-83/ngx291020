import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
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
    username: ['', null, this.uniqueUserName.bind(this)],
    password: this.fb.group({
      password: [''],
      cpassword: [''],
    }, {
      validators: [this.equalValidator]
    }),
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
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

  public signup(user: any): void {
    console.log(user);
  }

  public goToLogin(): void {
    this.router.navigate(['/login']);
  }

  public getControl(name: any): FormControl {
    return this.signUpForm.get(name) as FormControl;
  }

  public equalValidator({value}: FormControl): ValidationErrors | null {
    const [password, cpassword] = Object.values(value);
    return password === cpassword
      ? null
      : {
        password: 'Password do not match'
      };
  }

  public uniqueUserName({value: username}: FormControl): Observable<ValidationErrors | null> {
    return this.http.post('/checkUsername', {username});
  }

}
