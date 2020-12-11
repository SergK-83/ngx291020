import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {SharedModule} from '../../shared/shared.module';

export const childRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(childRoutes)
  ]
})
export class LoginModule { }
