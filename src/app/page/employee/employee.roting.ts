import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";
import { EmployeeListComponent } from "./employee/employee.component";
import { EmployeeAddComponent } from "./employee-add/employee-add.component";
import { EmployeeEditComponent } from "./employee-edit/employee-edit.component";

const routes : Routes = [
    {
        path:"",
        component:EmployeeListComponent
    },
    {
        path:"add",
        component:EmployeeAddComponent
    },
    {
        path:"detail/:id",
        component:EmployeeDetailComponent
    },
    {
        path:"edit/:id",
        component:EmployeeEditComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class EmployeeRouting{}