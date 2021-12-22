import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { fakeBackendProvider } from './_helpers';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CoreModule } from './core/core.module';
//import { SharedModule } from './shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // IMPORTAMOS EL CORE
//    CoreModule,
//    SharedModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
