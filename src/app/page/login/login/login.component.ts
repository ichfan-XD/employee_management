import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr'
import { LoginReq } from "src/app/dto/loginReqDto";
import { LoginService } from "src/app/service/login.service";

@Component({
    selector:"app-login",
    templateUrl:"./login.component.html"
})

export class LoginComponent{
    
    loginReq : LoginReq = {} as LoginReq

    constructor(
        private toastr: ToastrService,
        private loginService : LoginService,
        private router : Router    
    ){}

    login():void{
        this.loginService.login(this.loginReq)
            .then(result => {                
                if(result.data.username != null){
                    this.loginService.saveData(result.data.username) 
                    this.toastr.success(result.message)                
                    this.router.navigateByUrl("/")
                }else{
                    this.toastr.error(result.message)                    
                }
            })            
    }
}