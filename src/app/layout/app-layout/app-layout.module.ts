import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './ui/app-layout.component';
import { AppLayoutRoutes } from './app-layout.routing';
import { RouterOutlet } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterOutlet,
    AppLayoutRoutes
  ],
  declarations: [AppLayoutComponent]
})
export class AppLayoutModule { }
