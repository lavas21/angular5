import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DonarComponent } from './donar/donar.component';
import { DetailsComponent } from './details/details.component';
import { PastComponent } from './past/past.component';
import { MasterComponent } from './master/master.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DonarComponent,
    DetailsComponent,
    PastComponent,
    MasterComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MasterComponent/*AppComponent*/]
})
export class AppModule { }
