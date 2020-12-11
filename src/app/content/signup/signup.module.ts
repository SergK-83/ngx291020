import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './signup.component';
import {SharedModule} from '../../shared/shared.module';

export const childRoutes: Routes = [
  {
    path: '',
    component: SignupComponent
  }
];

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(childRoutes)
  ]
})
export class SignupModule { }
