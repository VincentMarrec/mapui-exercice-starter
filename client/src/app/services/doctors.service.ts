import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../models/Doctor.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http: HttpClient) {}

  getDoctors() {
    return this.http.get<Doctor[]>(`${environment.apiUrl}/doctors`);
  }

  getDoctor(id: string) {
    return this.http.get<Doctor>(`${environment.apiUrl}/doctors/${id}`);
  }

  addDoctor(doctor: Doctor) {
    return this.http.post<Doctor>(`${environment.apiUrl}/doctors`, doctor);
  }

  removeDoctor(doctor: Doctor) {
    return this.http.delete<Doctor>(`${environment.apiUrl}/doctors/${doctor._id}`);
  }
}
