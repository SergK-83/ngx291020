import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';
import {ProductsService} from './products.service';
import {environment} from '../environments/environment';
import {BASE_URL} from './config';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    ExchangeRatesComponent,
    ExchangeRatesDirective,
    HiddenDirective,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      provide: BASE_URL,
      useValue: environment.baseUrl
    },
    ProductsService
    // {
    //   provide: ProductsService,
    //   useClass: ProductsService
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// TODO mat error with IVY
