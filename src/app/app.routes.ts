import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/ui/app-layout.component';

export const routes: Routes = [
    {
        path: '',
        component:AppLayoutComponent,
        loadChildren: () => import('./layout/app-layout/app-layout.module').then(m => m.AppLayoutModule)
    }
];
