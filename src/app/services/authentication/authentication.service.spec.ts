import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { FirebaseModule } from 'src/app/modules/firebase.module';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      FirebaseModule
    ],
    providers: [AuthenticationService]
  }));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
