import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routing} from "./app-routing.module";
import {AuthenticationService} from "./service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddPatientComponent } from './add-patient/add-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import {ListPatientComponent} from "./list-patient/list-patient.component";
import {PatientService} from "./service/patient.service";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListPatientComponent,
    AddPatientComponent,
    EditPatientComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

