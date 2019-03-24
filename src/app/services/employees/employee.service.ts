import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class EmployeeService {

  constructor(private db: AngularFirestore) { }

  getEmployees() {
    return this.db.collection('employees').valueChanges();
  }
}
