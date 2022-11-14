import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoginRouting } from "./login.routing";
import { LoginComponent } from "./login/login.component";

@NgModule({
    imports:[
        LoginRouting, 
        FormsModule, 
        CommonModule
    ],
    declarations:[LoginComponent],
    exports:[LoginComponent]
})

export class LoginModule{}