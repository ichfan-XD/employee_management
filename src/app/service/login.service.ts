import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginReq } from "../dto/loginReqDto";
import { LoginRes } from "../dto/loginResDto";

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    login(data : LoginReq) {
        return this.userCheckSimulation(data)
    }

    saveData(data : any):void{
        localStorage.setItem('data', JSON.stringify(data))
    }

    userCheckSimulation(data : any){
        const loginRes : LoginRes = {
            data : {
                username : undefined
            },
            message : ""
        }
        return new Promise<LoginRes>((solve,reject) =>{
            if(data.username == "user" && data.password == "user") {
                loginRes.data.username = data.username
                loginRes.message = "selamat datang "+data.username
            }
            else  loginRes.message = "username atau passowrd salah"
            solve(loginRes)
        })
        
    }
}