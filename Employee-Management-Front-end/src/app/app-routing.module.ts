import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewallemployeesComponent } from './viewallemployees/viewallemployees.component';
import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LastpageComponent } from './lastpage/lastpage.component';


const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'Viewallemployees', component: ViewallemployeesComponent },
{ path: 'Registeremployee', component: RegisteremployeeComponent },
{ path: 'Updatedetails', component: UpdatedetailsComponent },
// { path: 'updateCart/:productId/:productName/:quantity/:quantityAvailable', component: UpdateCartComponent },
{ path: 'aboutus', component: AboutusComponent },
{ path: 'contactus', component: ContactusComponent },
{ path: 'lastpage', component: LastpageComponent },
{ path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

export class AppRoutingModule { }
