import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';

import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FirebaseModule } from './modules/firebase.module';

import { AuthenticationService } from './services/authentication/authentication.service';
import { EmployeeService } from './services/employees/employee.service';

import { EmployeesComponent } from './components/employees/employees.component';
import { LeaveComponent } from './components/leave/leave.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { TimeSheetsComponent } from './components/time-sheets/time-sheets.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    LeaveComponent,
    LunchComponent,
    TimeSheetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FirebaseModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [AuthenticationService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
