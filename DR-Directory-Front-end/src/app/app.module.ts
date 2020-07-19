import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { CommonlayoutComponent } from './commonlayout/commonlayout.component';
import { LastpageComponent } from './lastpage/lastpage.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from 'src/infosys-directory-services/employee-service/employee.service';
import { ViewallemployeesComponent } from './viewallemployees/viewallemployees.component';
import { LoginlayoutComponent } from './loginlayout/loginlayout.component';
import {MatButtonModule, MatSnackBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutusComponent,
    ContactusComponent,
    RegisteremployeeComponent,
    UpdatedetailsComponent,
    CommonlayoutComponent,
    LastpageComponent,
    ViewallemployeesComponent,
    LoginlayoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
