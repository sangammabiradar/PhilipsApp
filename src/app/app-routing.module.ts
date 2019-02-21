import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddPatientComponent} from "./add-patient/add-patient.component";
import {ListPatientComponent} from "./list-patient/list-patient.component";
import {EditPatientComponent} from "./edit-patient/edit-patient.component";



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-patient', component: AddPatientComponent },
  { path: 'list-patient', component: ListPatientComponent },
  { path: 'edit-patient', component: EditPatientComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);