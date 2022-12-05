import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/Patient.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) {}

  getPatients() {
    return this.http.get<Patient[]>(`${environment.apiUrl}/patients`);
  }

  getPatient(id: string) {
    return this.http.get<Patient>(`${environment.apiUrl}/patients/${id}`);
  }

  getPatientsOfDoctor(id: string) {
    return this.http.get<Patient[]>(`${environment.apiUrl}/patients/doctors/${id}`);
  }

  addPatient(patient: Patient) {
    return this.http.post<Patient>(`${environment.apiUrl}/patients`, patient);
  }

  updatePatient(id: string, patient: Patient) {
    return this.http.patch<Patient>(`${environment.apiUrl}/patients/${id}`, patient);
  }

  removePatient(patient: Patient) {
    return this.http.delete<Patient>(`${environment.apiUrl}/patients/${patient._id}`);
  }
}
