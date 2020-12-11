import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./content/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'signup', // в login component есть вариант с динамическим созданием данного route в самом компоненте
    loadChildren: () => import('./content/signup/signup.module').then((m) => m.SignupModule)
  },
  {
    path: 'backoffice',
    loadChildren: () => import('./content/backoffice/backoffice.module').then((m) => m.BackofficeModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
