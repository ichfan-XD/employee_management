import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeDataDto } from "src/app/dto/employeeDataDto";
import { EmployeeService } from "src/app/service/employee.service";

@Component({
    selector: "app-employee-edit",
    templateUrl: "./employee-edit.component.html",
})

export class EmployeeEditComponent implements OnInit{
    param : string = ""
    dateToday = new Date()
    employeeReq : EmployeeDataDto = {} as EmployeeDataDto

    constructor(
        private activateRoute: ActivatedRoute,
        private employeeService : EmployeeService,
        private router : Router
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
                this.employeeReq = result
            })
    }

    update():void{
        this.employeeService.update(this.employeeReq)
            .subscribe(result => console.log("berhasil update"))
    }
}