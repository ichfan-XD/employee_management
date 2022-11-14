import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login/login.component';
import { LogoutComponent } from './page/logout/logout.component';

const routes: Routes = [
  {
    path:"",
    loadChildren:() => import("./page/employee/employee.module").then(m => m.EmployeeModule)
  },
  {
    path:"login",
    loadChildren: () => import("./page/login/login.module").then(m => m.LoginModule)
  },
  {
    path:"logout",
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
