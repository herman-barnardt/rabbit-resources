import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employees/employee.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = ['first_name', 'last_name', 'phone_number', 'email_address'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  searching: boolean;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().pipe().subscribe(data => {
      this.dataSource.data = data;
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  search(searchString: string) {
    this.dataSource.filter = searchString.toLowerCase().trim();
  }

  cancelSearch() {
    this.searching = false;
    this.dataSource.filter = '';
  }
}
