import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListingsComponent } from './listings/listings.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginRegComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'listings', component: ListingsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
