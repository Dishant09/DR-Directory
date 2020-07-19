import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/infosys-directory-services/employee-service/employee.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  show: string;
  status = false;
  errMsg: string;

  constructor(private _employeeService: EmployeeService, private router: Router,private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.show = 'login';
  }

  validateEmployee(form: NgForm) {
    this._employeeService.validateEmployee(form.value.empno, form.value.password).subscribe(
      responseProductData => {
        this.status = responseProductData;
        if (this.status) {
          sessionStorage.setItem('employeeno', form.value.empno);
          this.router.navigate(['/Viewallemployees']);
        } else {

          this.snackbar.open('Incorrect Employee Number or Password Please Try Again', 'act', {duration: 2000, });
        }
      },
      responseProductError => {
        this.errMsg = responseProductError;
        console.log(this.errMsg);
      },
      () => console.log('Validate Employee method executed successfully')
    );
  }
}
