import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AuthGuard } from './auth.guard';
import { DefaultInterceptor } from './interceptors/default.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { ArtistRegistrationComponent } from './components/artist-registration/artist-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StarRatingModule } from 'angular-star-rating';
import { RouterModule } from '@angular/router';
import { ItemsGridComponent } from './components/items-grid/items-grid.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NotFoundComponent, ArtistRegistrationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot(),
    RouterModule
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
