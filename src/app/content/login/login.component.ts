import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    // private router: Router
  ) { }

  ngOnInit(): void {

    // console.log(this.router.config); // !!!
    //
    // const config = this.router.config;

    // можно налету перезаписывать routings
    // if (
    //   !config.some((objRout) => objRout.path === 'signup'
    //   )
    // ) {
    //
    //   const signupRout = {
    //     path: 'signup',
    //     component: SignupComponent
    //   };
    //
    //   config.splice(config.length - 1, 0, signupRout);
    //   this.router.resetConfig(config);
    //
    // }
  }

}
