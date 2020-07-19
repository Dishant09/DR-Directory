import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/infosys-directory-services/employee-service/employee.service';
import { IEmployee } from 'src/infosys-directory-interface/iemployee';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registeremployee',
  templateUrl: './registeremployee.component.html',
  styleUrls: ['./registeremployee.component.css']
})
export class RegisteremployeeComponent implements OnInit {
  show: string;
  showMsgDiv = false;
  errMsg: string;
  msg: string;

  constructor(private _employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.show = 'Registeremployee';
  }

  addemployee(form: NgForm) {
// tslint:disable-next-line: max-line-length
    console.log( form.value.employeename, form.value.age, form.value.emailid, form.value.password, form.value.address, form.value.contactnumber, form.value.unit, form.value.designation, form.value.currentcity, form.value.experience);

    // tslint:disable-next-line: max-line-length
    this._employeeService.addEmployee(form.value.employeename, form.value.age , form.value.emailid, form.value.password, form.value.address, form.value.contactnumber, form.value.unit, form.value.designation, form.value.currentcity, form.value.experience)
      .subscribe(
        responseProductData => {
          if (responseProductData != null) {
// tslint:disable-next-line: max-line-length
            this.msg = 'Welcome to our world ' + responseProductData.employeename + '.Your Employee No. is ' + responseProductData.employeeno + '.' ;
            alert(this.msg);
            this.router.navigate(['/login']);
          } else {
            alert('Some error occured, please try after some time.');
            this.router.navigate(['/Registeremployee']);
          }
        },
        responseProductError => {
          this.errMsg = responseProductError,
            console.log(this.errMsg),
            alert('Sorry, something went wrong. Please try again after sometime.');
          this.router.navigate(['/Registeremployee']);
        },
        () => console.log('Add Employee method executed successfully')
      );
  }

}
