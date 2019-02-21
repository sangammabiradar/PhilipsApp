import { Component, OnInit } from '@angular/core';
import {PatientService} from "../service/patient.service";
import {Router} from "@angular/router";
import {Patient} from "../model/patient.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  patient: Patient;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private patientService: PatientService) { }

  ngOnInit() {
    let patientId = localStorage.getItem("editPatientId");
    if(!patientId) {
      alert("Invalid action.")
      this.router.navigate(['list-patient']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      userName: ['', Validators.required],
      age: ['', Validators.required],
      dob: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required]
      
      
    });
    this.patientService.getPatientById(+patientId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.patientService.updatePatient(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-patient']);
        },
        error => {
          alert(error);
        });
  }

}

