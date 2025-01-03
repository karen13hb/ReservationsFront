import { Routes, RouterModule } from '@angular/router';
import { ReservationsComponent } from './ui/reservations.component';

const routes: Routes = [
  {
    path: '',
    component:ReservationsComponent
  },
];


export const ReservationsRoutes = RouterModule.forChild(routes);
