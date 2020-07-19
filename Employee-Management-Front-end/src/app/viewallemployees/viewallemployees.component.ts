import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/infosys-directory-services/employee-service/employee.service';
import { IEmployee } from 'src/infosys-directory-interface/iemployee';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewallemployees',
  templateUrl: './viewallemployees.component.html',
  styleUrls: ['./viewallemployees.component.css']
})
export class ViewallemployeesComponent implements OnInit {

  employees: IEmployee[];
  showMsgDiv = false;
  errMsg: string;
  employee: IEmployee;
  show: string;
  status = false;


// tslint:disable-next-line: variable-name
  constructor(private _employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.show = 'Viewallemployees';
    this.getAllEmployee();
  }

  getAllEmployee() {
    this._employeeService.getAllEmployee().subscribe(
      responseProductData => {
        this.employees = responseProductData;
        console.log(this.employees);
        this.showMsgDiv = false;
      },
      responseProductError => {
        this.employees = null;
        this.errMsg = responseProductError;
        console.log(this.errMsg);
      },
      () => console.log('Get All Employee method excuted successfully')
    );
  }

  getEmployeeByEmployeeno(form: NgForm) {
    this._employeeService.getEmployeeByEmployeeno(form.value.search).subscribe(
      responseProductData => {
        this.employee = responseProductData;
        this.employees = [];
        this.employees.push(this.employee);
        this.showMsgDiv = false;
      },
      responseProductError => {
        this.employee = null;
        this.errMsg = responseProductError;
        console.log(this.errMsg);
      },
      () => console.log('Get Employee by Employee No. method excuted successfully')
    );
  }
  logout() {
    // remove user from local storage to log user out
    console.log('inside');
    sessionStorage.removeItem('employeeno');
    this.router.navigate(['/lastpage']);
  }

  deleteEmployee() {
    const employeeno = sessionStorage.getItem('employeeno');
    this._employeeService.deleteEmployee(+employeeno) .subscribe(
      responseProductData => {
        this.status = responseProductData;

      },
      responseProductError => {
        this.errMsg = responseProductError;
        console.log(this.errMsg);
      },
      () => console.log('Delete Employee method executed successfully')
    );
    sessionStorage.removeItem('employeeno');
    this.router.navigate(['/lastpage']);
  }


}
