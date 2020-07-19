import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/infosys-directory-services/employee-service/employee.service';

@Component({
  selector: 'app-commonlayout',
  templateUrl: './commonlayout.component.html',
  styleUrls: ['./commonlayout.component.css']
})
export class CommonlayoutComponent implements OnInit {

  status = false;
  errMsg: string;

  constructor(private _employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
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
