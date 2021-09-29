import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroesDetailsModalComponent } from './modal/heroes-details-modal/heroes-details-modal.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesDetailsModalComponent,
    MessagesComponent,
    HomeComponent,
    NavbarComponent,
    AuthComponent,
    FourOhFourComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
