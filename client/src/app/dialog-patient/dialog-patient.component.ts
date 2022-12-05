import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Patient } from '../models/Patient.model';

export interface DialogPatientData {
  updating: boolean;
  patient: Patient;
}

@Component({
  selector: 'app-dialog-patient',
  templateUrl: './dialog-patient.component.html',
  styleUrls: ['./dialog-patient.component.css']
})
export class DialogPatientComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogPatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogPatientData,
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
