import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../services/reservation.service';
import { CreateReservationInput } from '../models/CreateReservationInput';
import { CreateReservationOutput } from '../models/CreateReservationOutput';
import { Reservation } from '../Entities/Reservation';
import { GetReservationRequestInput } from '../models/GetReservationRequestInput';
import { ToastComponent } from '../../../shared/components/toast/toast.component';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit,AfterViewInit  {

  @ViewChild('FormReserveModal') formReserveModal!: ModalComponent;
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;
  reserveForm: FormGroup;
  reservationsList!:Reservation[];
  filters:GetReservationRequestInput = {
    spaceId: null,
    userId: null ,
    startDate: null ,
    endDate: null,
  };
  
  constructor(private fb: FormBuilder, private reservationService: ReservationService) {

    this.reserveForm = this.fb.group({
      spaceId: ['', Validators.required],
      userId: ['', [Validators.required]],
      date: ['', [Validators.required]],
      startTime:['', [Validators.required]],
      endTime:['', [Validators.required]],
      
    });

   }

   ngAfterViewInit(): void {
    if (!this.toastComponent) {
      console.error('ToastComponent not initialized');
    }
  }
  ngOnInit() {
     this.getReservations();
  }

  openReserveModal() {
    this.formReserveModal.openModal('50%');
  }
  closeReserveModal(){
    this.formReserveModal.closeModal();
  }

  getReservations(): void {
    const params: any = {};

    if (this.filters.spaceId !== null) {
      params.spaceId = this.filters.spaceId;
    }
    if (this.filters.userId !== null) {
      params.userId = this.filters.userId;
    }
    if (this.filters.startDate !== null) {
      params.startDate = this.filters.startDate.toISOString();
    }
    if (this.filters.endDate !== null) {
      params.endDate = this.filters.endDate.toISOString();
    }
    this.reservationService.getReservations(params).subscribe({
      next: (data) => {
        this.reservationsList = data;
      },
      error: (err) => {
        this.toastComponent.showToast("Error al obtener reservas", "Error reservas", 5000)
      },
    });
  }
  createReservation(): void {
    debugger
    if (this.reserveForm.valid) {
      const formValues = this.reserveForm.value;
      
      const date = new Date(formValues.date);
      const formattedDate = date.toISOString().split('T')[0];

      const startDateTime = new Date(`${formattedDate}T${formValues.startTime}`);
      const endDateTime = new Date(`${formattedDate}T${formValues.endTime}`);

      const reservationInput: CreateReservationInput = {
        startDate: startDateTime.toISOString(),
        endDate: endDateTime.toISOString(),   
        userId: Number(formValues.userId),                      
        spaceId: Number(formValues.spaceId),                    
      };
  

      this.reservationService.createReservation(reservationInput).subscribe({
        next: (response) => {
          this.toastComponent.showToast("Reserva creada con exito!!", "Reserva Exitosa", 5000);
          this.getReservations();
          this.formReserveModal.closeModal();
        },
        error: (err) => {
          this.toastComponent.showToast("No se pudo crear la reserva", "Error  Reserva", 5000);
        },
      });
    } else {
      this.toastComponent.showToast("Error en el formulario", "Alerta", 5000);
    }
  }
  
  deleteReservation(id: number): void {
    this.reservationService.deleteReserve(id).subscribe({
      next: () => {
        this.toastComponent.showToast("Reserva eliminada con éxito", "Eliminación Reserva", 5000);
        this.getReservations();
      },
      error: (err) => {
        this.toastComponent.showToast("Error al eliminar la reserva", "Error Reserva", 5000)
        console.error('Error al eliminar la reserva:', err);
      },
    });
  }

  onDeleteReservation(id:number):void{
    this.deleteReservation(id);
  }
  onSubmit(){
    this.createReservation();
  }


}
