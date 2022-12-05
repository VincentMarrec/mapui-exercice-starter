import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { PatientsComponent } from './patients/patients.component';
import { PatientComponent } from './patient/patient.component';
import { DialogPatientComponent } from './dialog-patient/dialog-patient.component';
import { DialogDoctorComponent } from './dialog-doctor/dialog-doctor.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DialogTreatmentComponent } from './dialog-treatment/dialog-treatment.component';
import { DoctorComponent } from './doctor/doctor.component';

// Material
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [AppComponent, PatientsComponent, PatientComponent, DialogPatientComponent, DialogDoctorComponent, DoctorsComponent, DialogTreatmentComponent, DoctorComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, FormsModule, MatListModule, MatTableModule, MatButtonModule, MatIconModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatExpansionModule, MatToolbarModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
