import { Component, OnInit  } from "@angular/core";
import { EmployeeService } from "src/app/service/employee.service";
import { EmployeeDataDto } from "src/app/dto/employeeDataDto";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr'

@Component({
    selector: "app-employee-add",
    templateUrl: "./employee-add.component.html",
})

export class EmployeeAddComponent implements OnInit{

    dateToday = new Date()
    employeeReq : EmployeeDataDto = {} as EmployeeDataDto

    isGroupEmpty : boolean = false
    keyWord : string = ""
    groups : string[] = []
    results : string[] = []

    constructor(
        private employeeService : EmployeeService,
        private toastr: ToastrService,
        private router : Router
    ){}
    
    ngOnInit(): void {
        this.makeGroups()
    }

    save():void{
        this.employeeService.insert(this.employeeReq)
            .subscribe(result => {
                if(result.id != null) {
                    this.toastr.success(`data behasil disimpan`)
                    this.router.navigateByUrl("/")
                }
            })
    }

    checkGroup(){
        const tempResult = []
        const newKeyWord = this.keyWord.toLowerCase()
        if(this.keyWord != ""){
            for(let i = 0; i < this.groups.length; i++){  
                const data = this.groups[i].toLowerCase()              
                if(data.includes(newKeyWord)) tempResult.push(this.groups[i])
            }
            this.isGroupEmpty = true
        }else{
            this.isGroupEmpty = false
        }
        this.results = tempResult
    }

    makeGroups(){
        const tempGroups = []
        for(let i = 0; i < 10; i++){
            tempGroups.push(`Divisi ${i+1}`)
        }
        this.groups = tempGroups
    }

    selectValue(data : string){
        this.keyWord = data
        this.isGroupEmpty = false
        this.employeeReq.group = data
    }
}