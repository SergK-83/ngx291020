import { NgModule } from '@angular/core';
import { BackofficeComponent } from './backoffice.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {HeaderComponent} from './header/header.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {ExchangeRatesComponent} from './header/exchange-rates/exchange-rates.component';
import {ExchangeRatesDirective} from './header/exchange-rates/exchange-rates.directive';
import {HiddenDirective} from './header/exchange-rates/hidden.directive';

export const childRoutes: Routes = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./content/products/products.module').then((m) => m.ProductsModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    BackofficeComponent,
    HeaderComponent,
    SidenavComponent,
    ExchangeRatesComponent,
    ExchangeRatesDirective,
    HiddenDirective,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(childRoutes)
  ]
})
export class BackofficeModule { }
