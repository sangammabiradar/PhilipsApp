import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Patient} from "../model/patient.model";

@Injectable()
export class PatientService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3000/patients';

  getPatients() {
    /* let fakeUsers = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
     {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
     {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
     {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
   ];
   return Observable.of(fakeUsers).delay(5000);*/
    return this.http.get<Patient[]>(this.baseUrl);
  }

  getPatientById(id: number) {
    return this.http.get<Patient>(this.baseUrl + '/' + id);
  }

  createPatient(patient: Patient) {
    return this.http.post(this.baseUrl, patient);
  }

  updatePatient(patient: Patient) {
    return this.http.put(this.baseUrl + '/' + patient.id, patient);
  }

  deletePatient(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
