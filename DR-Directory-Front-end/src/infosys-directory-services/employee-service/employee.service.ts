import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from 'src/infosys-directory-interface/iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<any> {
    const tempVar = this.http.get<any>('http://localhost:8080/api/employees').pipe(catchError(this.errorHandler));
    return tempVar;
  }

  validateEmployee(employeeno: string, password: string): Observable<any> {
    const param = employeeno + '/' + password;
    return this.http.get<any>('http://localhost:8080/api/employees/validateEmployee/' + param).pipe(catchError(this.errorHandler));
  }

// tslint:disable-next-line: max-line-length
  addEmployee(employeename: string, age: number , emailid: string,  password: string, address: string, contactnumber: number, unit: string, designation: string, currentcity: string, experience: number): Observable<any> {
    let employeeObj: IEmployee;
    employeeObj = { employeename, age, emailid, password, address, contactnumber, unit, designation, currentcity, experience  };

    // tslint:disable-next-line: max-line-length
    console.log( employeeObj.employeename, employeeObj.age, employeeObj.emailid, employeeObj.password, employeeObj.address, employeeObj.contactnumber, employeeObj.unit, employeeObj.designation, employeeObj.currentcity, employeeObj.experience);
    return this.http.post<any>('http://localhost:8080/api/employees/add', employeeObj).pipe(catchError(this.errorHandler));
  }

// tslint:disable-next-line: max-line-length
  updateEmployeeDetails(employeeno: string, employeename: string, age: number , emailid: string,  password: string, address: string, contactnumber: number, unit: string, designation: string, currentcity: string, experience: number): Observable<any> {
    const param =  employeeno ;
    let employeeObj: IEmployee;
    employeeObj = {  employeename, age, emailid, password, address, contactnumber, unit, designation, currentcity, experience };

    // tslint:disable-next-line: max-line-length
    return this.http.put<any>('http://localhost:8080/api/employees/' + param, employeeObj).pipe(catchError(this.errorHandler));
  }

  deleteEmployee(employeeno: number ): Observable<any> {

    const param = '/' + employeeno;
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.delete<any>('http://localhost:8080/api/employees/delete' + param, httpOptions).pipe(catchError(this.errorHandler));
  }

  // search http://localhost:8080/api/employees/employee/+param

  getEmployeeByEmployeeno(employeeno: number): Observable<any> {
    const param =  employeeno ;
    const tempVar = this.http.get<any>('http://localhost:8080/api/employees/employee/' + param).pipe(catchError(this.errorHandler));
    return tempVar;
  }

  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || 'Server Error');
  }
}
