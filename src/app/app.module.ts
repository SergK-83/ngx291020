import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import {ProductsService} from './content/backoffice/content/products/products.service';
import {environment} from '../environments/environment';
import {BASE_URL} from './config';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import {ModalModule} from './modal/modal.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ModalModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
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
  // entryComponents: [ConfirmProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// TODO mat error with IVY
