import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../service/patient.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private patientService: PatientService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      userName: ['', Validators.required],
      age: ['', Validators.required],
      dob: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      edit: ['', Validators.required],
      delete: ['', Validators.required]
      
    });

  }

  onSubmit() {
    this.patientService.createPatient(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-patient']);
      });
  }

}

