import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { LeaveComponent } from './components/leave/leave.component';
import { TimeSheetsComponent } from './components/time-sheets/time-sheets.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'lunch', component: LunchComponent },
  { path: 'leave', component: LeaveComponent },
  { path: 'time-sheets', component: TimeSheetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
