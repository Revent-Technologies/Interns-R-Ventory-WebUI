import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import * as fromApp from './@core/stores/app/app.reducer';
import { AuthModule } from './@auth/auth.module';
import { NotificationModule } from './@core/shared/notification/notification.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    RouterModule,
    NotificationModule
  // MatSnackBarModule
  
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
