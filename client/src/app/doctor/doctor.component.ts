import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../models/Doctor.model';
import { Patient } from '../models/Patient.model';
import { Treatment } from '../models/Treatment.model';
import { DoctorsService } from '../services/doctors.service';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  public doctor: Doctor = new Doctor();
  public patients: Patient[] = [];

  public id: string = '';

  constructor(private doctorsService: DoctorsService, private patientsService: PatientsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.fetchDoctor();
    this.fetchPatientsOfDoctor();
  }

  fetchDoctor() {
    this.doctorsService.getDoctor(this.id).subscribe((data: Doctor) => {
      this.doctor = data;
    });
  }

  fetchPatientsOfDoctor() {
    this.patientsService.getPatientsOfDoctor(this.id).subscribe((data: Patient[]) => {
      this.patients = data;
    })
  }

  filterTreatmentsRelatedToDoctor(treatments: Treatment[]) : Treatment[] {
    return treatments.filter(t => t.doctor._id == this.id)
  }

}
