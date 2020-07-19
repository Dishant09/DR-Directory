import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/infosys-directory-services/employee-service/employee.service';
import { IEmployee } from 'src/infosys-directory-interface/iemployee';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdatedetailsComponent implements OnInit {

  errorMsg: string;
  show: string;
  status = false;
  errMsg: string;

  constructor(private _employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.show = 'Updatedetails';
  }

  updateEmployeeDetails(form: NgForm) {
// tslint:disable-next-line: max-line-length
    this._employeeService.updateEmployeeDetails(sessionStorage.getItem('employeeno'), form.value.name, form.value.age , form.value.emailid, form.value.password, form.value.address, form.value.contactno, form.value.unit, form.value.designation, form.value.currentcity, form.value.experience).subscribe(
      responseUpdateEmployeeDetails => {
        if (responseUpdateEmployeeDetails != null) {
          alert('Employee Details updated successfully.');
          this.router.navigate(['/Viewallemployees']);
        } else {
          alert('Some error occured, please try after some time.');
          this.router.navigate(['/Updatedetails']);
        }
      },
      responseUpdateCartError => {
        this.errorMsg = responseUpdateCartError;
        console.log(this.errorMsg);
        alert('Some error occured, please try after some time.');
        this.router.navigate(['/Updatedetails']);
      },
      () => console.log('UpdateCart method executed successfully.')
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
