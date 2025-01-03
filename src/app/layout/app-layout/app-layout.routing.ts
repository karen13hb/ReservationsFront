import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../modules/reservations/reservations.module').then(m => m.ReservationsModule), 
  },
];

export const AppLayoutRoutes = RouterModule.forChild(routes);
