import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminBootComponent} from "./components/boot/admin-boot.component";
import {AdminLoginComponent} from "./components/login/admin-login.component";

const routes: Routes = [
  {path: '', component: AdminBootComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: AdminLoginComponent}
    ]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
