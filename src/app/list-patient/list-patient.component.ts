import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PatientService} from "../service/patient.service";
import {Patient} from "../model/patient.model";

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {

  patients: Patient[];

  constructor(private router: Router, private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getPatients()
      .subscribe( data => {
        this.patients = data;
      });
  }

  deletePatient(patient: Patient): void {
    this.patientService.deletePatient(patient.id)
      .subscribe( data => {
        this.patients= this.patients.filter(u => u !== patient);
      })
  };

  editPatient(patient: Patient): void {
    localStorage.removeItem("editPatientId");
    localStorage.setItem("editPatientId", patient.id.toString());
    this.router.navigate(['edit-patient']);
  };

  addPatient(): void {
    this.router.navigate(['add-patient']);
  };
}
