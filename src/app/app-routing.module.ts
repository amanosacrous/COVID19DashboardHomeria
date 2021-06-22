import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/components/dashboard/dashboard.component';
import { CONFIG } from './config/config';


const routes: Routes = [
  { path: '', redirectTo: CONFIG.URLS.DASHBOARD, pathMatch: 'full'},
  { path: CONFIG.URLS.DASHBOARD, component: DashboardComponent },
  { path: '**', redirectTo: CONFIG.URLS.DASHBOARD},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
