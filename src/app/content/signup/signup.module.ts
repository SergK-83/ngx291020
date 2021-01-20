import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './signup.component';
import {SharedModule} from '../../shared/shared.module';
import { SwitcherComponent } from './switcher/switcher.component';

export const childRoutes: Routes = [
  {
    path: '',
    component: SignupComponent
  }
];

@NgModule({
  declarations: [
    SignupComponent,
    SwitcherComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(childRoutes)
  ]
})
export class SignupModule { }
