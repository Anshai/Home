import {NgModule} from "@angular/core";
import {AdminLoginComponent} from "./components/login/admin-login.component";
import {AdminBootComponent} from "./components/boot/admin-boot.component";
import {AdminRoutingModule} from "./admin-routing.module";

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminBootComponent
  ],
  imports: [
    AdminRoutingModule
  ],
  exports: []
})

export class AdminModule {}
