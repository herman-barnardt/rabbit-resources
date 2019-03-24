import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  constructor(private fireAuth: AngularFireAuth) {
    this.user = fireAuth.authState;
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.fireAuth.auth.signInWithPopup(provider);
  }

  logout() {
    this.fireAuth.auth.signOut();
  }
}
