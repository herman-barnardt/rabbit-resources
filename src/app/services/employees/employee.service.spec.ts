import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { FirebaseModule } from 'src/app/modules/firebase.module';

describe('EmployeesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [FirebaseModule],
    providers: [EmployeeService]
  }));

  it('should be created', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service).toBeTruthy();
  });
});
