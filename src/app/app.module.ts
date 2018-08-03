import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DonarComponent } from './donar/donar.component';
import { DetailsComponent } from './details/details.component';
import { PastComponent } from './past/past.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DonarComponent,
    DetailsComponent,
    PastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
