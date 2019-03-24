import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MaterialModule } from './modules/material.module';

import { environment } from '../environments/environment';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthenticationService } from './services/authentication/authentication.service';

import { EmployeeService } from './services/employees/employee.service';
import { EmployeesComponent } from './components/employees/employees.component';
import { FirebaseModule } from './modules/firebase.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent
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
