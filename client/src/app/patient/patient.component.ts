import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { DialogTreatmentComponent } from '../dialog-treatment/dialog-treatment.component';
import { Doctor } from '../models/Doctor.model';
import { Patient } from '../models/Patient.model';
import { Treatment } from '../models/Treatment.model';
import { DoctorsService } from '../services/doctors.service';
import { PatientsService } from '../services/patients.service';
import { TreatmentsService } from '../services/treatments.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  public patient: Patient = new Patient();

  public id: string = '';
  
  displayedColumns: string[] = ['name', 'code', 'start', 'end', 'doctor', 'actions'];
  dataSource = new MatTableDataSource<Treatment>();

  public doctors: Doctor[] = [];
  
  constructor(private patientsService: PatientsService, private doctorsService: DoctorsService, private treatmentsService: TreatmentsService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.fetchPatient();
    this.fetchAllDoctors();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogTreatmentComponent, {
      width: '700px',
      data: {treatment: {}, doctors: this.doctors},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.addTreatment(result);
      }
    });
  }

  fetchPatient() {
    this.patientsService.getPatient(this.id).subscribe((data: Patient) => {
      this.patient = data;
      this.dataSource.data = data.treatments;
    });
  }

  fetchAllDoctors() {
    this.doctorsService.getDoctors().subscribe((data: Doctor[]) => {
      this.doctors = data;
    });
  }

  addTreatment(data: Treatment) {
    this.treatmentsService
      .addTreatment(this.id, data)
      .subscribe(result => {
        this.patient.treatments.push(result);
        this.dataSource.data = this.patient.treatments;
      })
  }

  onDeleteTreatment(treatment: Treatment) {
    // event.stopPropagation()
    this.treatmentsService
      .removeTreatment(treatment)
      .subscribe(result => {
        this.patient.treatments = this.patient.treatments.filter(t => t._id != result._id);
        this.dataSource.data = this.patient.treatments;
      })
  }

}
