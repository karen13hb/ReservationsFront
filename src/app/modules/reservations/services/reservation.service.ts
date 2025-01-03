import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CreateReservationInput } from '../models/CreateReservationInput';
import { CreateReservationOutput } from '../models/CreateReservationOutput';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

private APIUrl = environment.APIUrl;
constructor(private http: HttpClient) {

 }

  createReservation(data: CreateReservationInput): Observable<CreateReservationOutput> {
    return this.http.post<CreateReservationOutput>(`${this.APIUrl}/Reservations/`, data);
  }
  getReservations(filters: any): Observable<any> {
    const params = new HttpParams({ fromObject: filters });
    return this.http.get<any>(`${this.APIUrl}/Reservations/`, { params });
  }
  deleteReserve(id: number): Observable<any> {
    return this.http.delete<any>( `${this.APIUrl}/Reservations/${id}`);
  }

}
