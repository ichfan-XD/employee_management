import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})

export class EmployeeService{

    constructor(private http: HttpClient){}

    getAll():Observable<any>{
        return this.http.get<any>('http://localhost:3000/employee')
    }

    getById(id : string):Observable<any>{
        return this.http.get<any>(`http://localhost:3000/employee/${id}`)
    }

    getWithPagination(page : number,limit : number, sortingKey : string, keyWord1 : string,keyWordBy1 : string, keyWord2 : string, keyWordBy2 : string):Observable<any>{
        let buildString = "http://localhost:3000/employee"
        if(keyWord1 != "" && keyWord2 != "") buildString += `?${keyWordBy1}_like=${keyWord1}&${keyWordBy2}_like=${keyWord2}`
        else if(keyWord1 != "" && keyWord2 == "") buildString += `?${keyWordBy1}_like=${keyWord1}`
        else buildString += `?_page=${page}&_limit=${limit}`

        if(sortingKey != "") buildString += `&_sort=${sortingKey}`
        
        console.log(`${buildString}&_page=${page}&_limit=${limit}`)
        return this.http.get<any>(`${buildString}&_page=${page}&_limit=${limit}`)
        // return this.http.get<any>(`http://localhost:3000/employee?_page=${page}&_limit=${limit}`)
    }

    insert(data : any):Observable<any>{
        return this.http.post<any>('http://localhost:3000/employee',data)
    }

    update(data : any):Observable<any>{
        return this.http.put<any>(`http://localhost:3000/employee/${data.id}`,data)
    }

    delete(id : number):Observable<any>{
        return this.http.delete<any>(`http://localhost:3000/employee/${id}`)
    }
}