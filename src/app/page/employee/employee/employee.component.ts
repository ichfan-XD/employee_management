import { Component, OnInit } from "@angular/core"
import { Store } from "@ngrx/store"
import { Subscription } from "rxjs"
import { EmployeeDto } from "src/app/dto/employeeDto"
import { EmployeeService } from "src/app/service/employee.service"
import { ToastrService } from 'ngx-toastr'

import { pageActiveChanging, numberOfRecordChanging, sortingKeyChanging, keyWord1Changing, keyWordBy1Changing, keyWord2Changing, keyWordBy2Changing} from '../../../store.action'

@Component({
    selector: "app-employee-list",
    templateUrl: "./employee.component.html"
})

export class EmployeeListComponent implements OnInit{
    employeeSubs? : Subscription
    employees : EmployeeDto = {
        data : []
    }

    pageActive! : number
    numberOfRecord! : number
    numberOfData! : number
    sortingKey! : string
    keyWord1! : string
    keyWordBy1! :string
    keyWord2! : string
    keyWordBy2! : string
    constructor(
        private employeeService : EmployeeService,
        private toastr: ToastrService,
        private store: Store<{ 
            pageActive : number,
            numberOfRecord : number,
            sortingKey : string
            keyWord1 : string,
            keyWordBy1 : string,
            keyWord2 : string,
            keyWordBy2 : string,
        }>
    ){
        store.select('pageActive').subscribe(values => this.pageActive = values)
        store.select('numberOfRecord').subscribe(values => this.numberOfRecord = values)
        store.select('sortingKey').subscribe(values => this.sortingKey = values)
        store.select('keyWord1').subscribe(values => this.keyWord1 = values)
        store.select('keyWordBy1').subscribe(values => this.keyWordBy1 = values)
        store.select('keyWord2').subscribe(values => this.keyWord2 = values)
        store.select('keyWordBy2').subscribe(values => this.keyWordBy2 = values)
    }
    
    ngOnInit(){
        this.initData()
    }

    initData(){
        if(this.numberOfRecord < 5) this.numberOfRecord = 5
        else if(this.numberOfRecord > 20) this.numberOfRecord = 20
        
        this.employeeSubs = this.employeeService.getWithPagination(this.pageActive,this.numberOfRecord,this.sortingKey,this.keyWord1,this.keyWordBy1,this.keyWord2,this.keyWordBy2)
            .subscribe(result => {                
                this.employees.data = result
        })
    }

    delete(id : number){
        this.employeeService.delete(id)
            .subscribe(result => {
                this.initData()
                console.log("data berhasil dihapus")
            }
        )
    }

    search(){
        this.searchChange()
        this.initData()
    }

    searchChange(){
        console.log(this.keyWord1)
        const keyWord1 = this.keyWord1
        const keyWordBy1 = this.keyWordBy1
        const keyWord2 = this.keyWord2
        const keyWordBy2 = this.keyWordBy2
        const pageActive = 1
        this.store.dispatch(keyWord1Changing({keyWord1}))
        this.store.dispatch(keyWordBy1Changing({keyWordBy1}))
        this.store.dispatch(keyWord2Changing({keyWord2}))
        this.store.dispatch(keyWordBy2Changing({keyWordBy2}))
        this.store.dispatch(pageActiveChanging({pageActive}))
    }

    sorting(){
        this.pageActive = 1
        const sortingKey = this.sortingKey
        const pageActive = this.pageActive
        this.store.dispatch(sortingKeyChanging({sortingKey}))
        this.store.dispatch(pageActiveChanging({pageActive}))
        this.initData()
    }

    resetSorting(){
        this.sortingKey = ""
        this.pageActive = 1
        const sortingKey = this.sortingKey
        const pageActive = this.pageActive
        this.store.dispatch(sortingKeyChanging({sortingKey}))
        this.store.dispatch(pageActiveChanging({pageActive}))
        this.initData()
    }

    previousPage(){
        if(this.pageActive > 1) {
            const pageActive = --this.pageActive
            this.store.dispatch(pageActiveChanging({pageActive}))
            this.initData()
        }
        else {
            this.pageActive = 1
            const pageActive = this.pageActive
            this.store.dispatch(pageActiveChanging({pageActive}))
            this.initData()
        }
    }

    nextPage(){
        if(this.employees.data.length != 0) {
            const pageActive = ++this.pageActive
            this.store.dispatch(pageActiveChanging({pageActive}))
            this.initData()
        }
    }

    goToPage(){
        const pageActive = this.pageActive
        this.store.dispatch(pageActiveChanging({pageActive}))
        this.initData()
    }

    changeNumberOfRecord(){
        const numberOfRecord = this.numberOfRecord
        this.store.dispatch(numberOfRecordChanging({numberOfRecord}))
        this.initData()
    }

    showEdit(data : string){
        this.toastr.warning(`data ${data} berhasil diubah`);
    }

    showDelete(data : string){
        this.toastr.error(`data ${data} behasil dihapus`)
    }
}