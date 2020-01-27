import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminBootComponent} from "./boot/admin-boot.component";
import {AdminHomeComponent} from "./components/admin-home/admin-home.component";
import {AdminNapiIgeComponent} from "./components/admin-napi-ige/admin-napi-ige.component";

const routes: Routes = [
    {path: '', component: AdminBootComponent, children: [
            {path: '', redirectTo: 'home'},
            {path: 'home', component: AdminHomeComponent},
            {path: 'napi-ige', component: AdminNapiIgeComponent}
        ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {}
