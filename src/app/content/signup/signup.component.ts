import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpForm = new FormGroup({
    username: new FormControl({value: 'Serg', disabled: true}, [Validators.required, Validators.minLength(4)]),
    // password: new FormGroup({
    //   password: new FormControl(''),
    //   cpassword: new FormControl(''),
    // }),
  });

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    console.log(this.router.config); // !!!

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
}
