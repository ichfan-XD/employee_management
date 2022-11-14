import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";
import { EmployeeRouting } from "./employee.roting";
import { EmployeeListComponent } from "./employee/employee.component";
import { EmployeeAddComponent } from "./employee-add/employee-add.component";
import { EmployeeEditComponent } from "./employee-edit/employee-edit.component";
 
@NgModule({
    imports:[
        FormsModule,
        CommonModule,
        EmployeeRouting
    ],
    declarations:[
        EmployeeListComponent,
        EmployeeAddComponent,
        EmployeeDetailComponent,
        EmployeeEditComponent
    ],
    exports:[
        EmployeeListComponent,
        EmployeeAddComponent,
        EmployeeDetailComponent,
        EmployeeEditComponent
    ]
})
export class EmployeeModule{}