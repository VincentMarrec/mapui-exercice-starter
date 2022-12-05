import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Doctor } from '../models/Doctor.model';
import { Treatment } from '../models/Treatment.model';

export interface DialogTreatmentData {
  treatment: Treatment;
  doctors: Doctor[];
}

@Component({
  selector: 'app-dialog-treatment',
  templateUrl: './dialog-treatment.component.html',
  styleUrls: ['./dialog-treatment.component.css']
})
export class DialogTreatmentComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogTreatmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogTreatmentData,
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
