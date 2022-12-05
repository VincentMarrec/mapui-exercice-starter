import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientComponent } from './patient/patient.component';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [
    {
      path: '',
      component: PatientsComponent
    },
    {
      path: 'patients/:id',
      component: PatientComponent
    },
    {
      path: 'doctors',
      component: DoctorsComponent
    },
    {
      path: 'doctors/:id',
      component: DoctorComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
