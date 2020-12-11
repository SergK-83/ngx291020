import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    console.log(this.router.config); // !!!

    // можно налету перезаписывать routings
    // this.router.resetConfig([
    //   {
    //      path: 'dashboard'
    //   }
    // ]);

  }

  public goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
