import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {SharedModule} from '../../shared/shared.module';
import { UsernameValidatorDirective } from './username-validator.directive';

export const childRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    UsernameValidatorDirective
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(childRoutes)
  ]
})
export class LoginModule { }
