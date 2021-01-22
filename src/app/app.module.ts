import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import {BASE_URL} from './shared/services/config';
import {ModalModule} from './modal/modal.module';
import {AppRoutingModule} from './app-routing.module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducers} from './store';
import {environment} from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    ModalModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (baseUrl: string) => {
       return () => {
         Promise.resolve().then(() => console.log('APP_INITIALIZER', baseUrl));
       };
      },
      deps: [BASE_URL],
      multi: true
    },
  ],
  // entryComponents: [ConfirmProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// TODO mat error with IVY
