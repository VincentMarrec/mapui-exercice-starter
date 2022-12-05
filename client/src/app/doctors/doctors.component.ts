import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogDoctorComponent } from '../dialog-doctor/dialog-doctor.component';
import { Doctor } from '../models/Doctor.model';
import { DoctorsService } from '../services/doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors: Doctor[] = [];

  displayedColumns: string[] = ['firstName', 'lastName', 'speciality', 'actions'];
  dataSource = new MatTableDataSource<Doctor>();
  
  constructor(private doctorsService: DoctorsService, public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDoctorComponent, {
      width: '700px',
      data: {updating: false, doctor: {}},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.addDoctor(result);
      }
    });
  }

  ngOnInit() {
    this.fetchAllDoctors();
  }

  fetchAllDoctors() {
    this.doctorsService.getDoctors().subscribe((data: Doctor[]) => {
      this.doctors = data;
      this.dataSource.data = data;
    });
  }

  addDoctor(doctor: Doctor) {
    this.doctorsService
      .addDoctor(doctor)
      .subscribe(result => {
        this.doctors.push(result)
        this.dataSource.data = this.doctors;
      })
  }

  onDeleteDoctor(event: Event, doctor: Doctor) {
    event.stopPropagation()
    this.doctorsService
      .removeDoctor(doctor)
      .subscribe(result => {
        this.doctors = this.doctors.filter(p => p._id != result._id);
        this.dataSource.data = this.doctors;
      })
  }

}
