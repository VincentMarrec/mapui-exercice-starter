import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogPatientComponent } from '../dialog-patient/dialog-patient.component';
import { Patient } from '../models/Patient.model';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients: Patient[] = [];

  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'gender', 'actions'];
  dataSource = new MatTableDataSource<Patient>();
  
  constructor(private patientsService: PatientsService, public dialog: MatDialog) { }

  openDialog(patient: Patient | void): void {
    const dialogRef = this.dialog.open(DialogPatientComponent, {
      width: '700px',
      data: {updating: Boolean(patient), patient: Object.assign({}, patient)},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined && !patient) {
        this.addPatient(result);
      } else if (result !== undefined && patient) {
        this.updatePatient(patient._id, result);
      }
    });
  }

  ngOnInit() {
    this.fetchAllPatients();
  }

  fetchAllPatients() {
    this.patientsService.getPatients().subscribe((data: Patient[]) => {
      this.patients = data;
      this.dataSource.data = data;
    });
  }

  addPatient(patient: Patient) {
    this.patientsService
      .addPatient(patient)
      .subscribe(result => {
        this.patients.push(result)
        this.dataSource.data = this.patients;
      })
  }

  updatePatient(id: string, data: Patient) {
    this.patientsService
      .updatePatient(id, data)
      .subscribe(result => {
        const i = this.patients.findIndex(p => p._id == id)
        if (i == -1) return;
        this.patients[i] = result;
        this.dataSource.data = this.patients;
      })
  }

  onUpdatePatient(event: Event, patient: Patient) {
    event.stopPropagation()
    this.openDialog(patient);
  }

  onDeletePatient(event: Event, patient: Patient) {
    event.stopPropagation()
    this.patientsService
      .removePatient(patient)
      .subscribe(result => {
        this.patients = this.patients.filter(p => p._id != result._id);
        this.dataSource.data = this.patients;
      })
  }

}
