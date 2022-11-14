import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LogoutService } from "src/app/service/logout.service";

@Component({
    selector:"app-logout",
    template:''
})

export class LogoutComponent implements OnInit{
    constructor(
        private router : Router,
        private logutService : LogoutService
    ){}

    ngOnInit(): void {
        this.logutService.logout()
        this.router.navigateByUrl("/login")
    }
}