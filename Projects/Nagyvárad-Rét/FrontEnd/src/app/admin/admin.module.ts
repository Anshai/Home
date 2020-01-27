import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminBootComponent} from "./boot/admin-boot.component";
import {AdminHomeComponent} from "./components/admin-home/admin-home.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminNapiIgeComponent} from "./components/admin-napi-ige/admin-napi-ige.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
      AdminBootComponent,
      AdminHomeComponent,
      AdminNapiIgeComponent
  ],
  imports: [
      CommonModule,
      AdminRoutingModule,
      ReactiveFormsModule,
      RouterModule
  ]
})
export class AdminModule { }
