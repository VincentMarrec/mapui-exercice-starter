import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Doctor } from '../models/Doctor.model';

export interface DialogDoctorData {
  doctor: Doctor;
}

@Component({
  selector: 'app-dialog-doctor',
  templateUrl: './dialog-doctor.component.html',
  styleUrls: ['./dialog-doctor.component.css']
})
export class DialogDoctorComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDoctorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDoctorData,
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
