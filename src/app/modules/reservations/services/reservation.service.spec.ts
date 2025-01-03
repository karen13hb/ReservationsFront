/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing'; // Nueva forma de importar
import { ReservationService } from './reservation.service';
import { environment } from '../../../../environments/environment';
import { CreateReservationInput } from '../models/CreateReservationInput';
import { CreateReservationOutput } from '../models/CreateReservationOutput';
import { provideHttpClient } from '@angular/common/http';

describe('Service: Reservation', () => {
  let service: ReservationService;
  let httpMock: HttpTestingController;

  const APIUrl = environment.APIUrl;
   
   const mockReservationInput: CreateReservationInput = {
    startDate: '2025-01-10T10:00:00Z',  
    endDate: '2025-01-10T12:00:00Z',    
    userId: 1,                       
    spaceId: 2                        
  };

  
  const mockReservationOutput: CreateReservationOutput = {
    Id: 1,                               
    userId: 1,                         
    spaceId: 2,                        
    startDate: '2025-01-10T10:00:00Z',   
    endDate: '2025-01-10T12:00:00Z',     
    createdAt: '2025-01-01T08:00:00Z'    
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        ReservationService
      ]
    });
    service = TestBed.inject(ReservationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('createReservation', () => {
    it('should create a reservation and return the response', () => {
      service.createReservation(mockReservationInput).subscribe(response => {
        expect(response).toEqual(mockReservationOutput);
      });

      const req = httpMock.expectOne(`${APIUrl}/Reservations/`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(mockReservationInput);

      req.flush(mockReservationOutput); 
    });
  });

  describe('getReservations', () => {
    it('should get reservations with filters and return the response', () => {
      const mockFilters = { status: 'active' };
      const mockReservations = [
        {
          id: 10,
          userId: 1,
          userName: "Karen Herrera",
          spaceId: 1,
          spaceName: "Sala A",
          startDate: "2024-12-01T09:00:00",
          endDate: "2024-12-01T11:00:00",
          createdAt: "2025-01-03T02:18:40.23"
        },
        {
          id: 11,
          userId: 2,
          userName: "Pepito Perez",
          spaceId: 2,
          spaceName: "Sala B",
          startDate: "2024-12-01T13:00:00",
          endDate: "2024-12-01T14:00:00",
          createdAt: "2025-01-03T02:18:40.23"
        }
      ];

      service.getReservations(mockFilters).subscribe(response => {
        expect(response).toEqual(mockReservations);
      });

      const req = httpMock.expectOne(`${APIUrl}/Reservations/?status=active`);
      expect(req.request.method).toBe('GET');
      req.flush(mockReservations);  
    });
  });

  describe('deleteReserve', () => {
    it('should delete a reservation and return a success message', () => {
      const reservationId = 1;
      const mockDeleteResponse = { message: 'Reservation deleted successfully' };

      service.deleteReserve(reservationId).subscribe(response => {
        expect(response).toEqual(mockDeleteResponse);
      });

      const req = httpMock.expectOne(`${APIUrl}/Reservations/${reservationId}`);
      expect(req.request.method).toBe('DELETE');
      req.flush(mockDeleteResponse);
    });
  });
});
