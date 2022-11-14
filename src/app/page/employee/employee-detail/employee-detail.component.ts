import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EmployeeDataDto } from "src/app/dto/employeeDataDto";
import { EmployeeService } from "src/app/service/employee.service";

@Component({
    selector: "app-employee-detail",
    templateUrl: "./employee-detail.component.html"
})

export class EmployeeDetailComponent implements OnInit{
    param : string = ""
    employee : EmployeeDataDto = {} as EmployeeDataDto

    constructor(
        private activateRoute: ActivatedRoute,
        private employeeService : EmployeeService
    ){}

    ngOnInit(): void {
        this.activateRoute.params.subscribe(result => {
            const resultTemp: any = result
            this.param = resultTemp.id
            
            this.initData()
        })
    }

    initData():void{
        this.employeeService.getById(this.param)
            .subscribe(result => {
                this.employee = result
            })
    }
}