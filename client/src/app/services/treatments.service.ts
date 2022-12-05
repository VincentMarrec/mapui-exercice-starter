import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Treatment } from '../models/Treatment.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentsService {

  constructor(private http: HttpClient) {}

  addTreatment(patientId: string, treatment: Treatment) {
    return this.http.post<Treatment>(`${environment.apiUrl}/treatments`, {patient: patientId, treatment});
  }

  removeTreatment(treatment: Treatment) {
    return this.http.delete<Treatment>(`${environment.apiUrl}/treatments/${treatment._id}`);
  }
}
