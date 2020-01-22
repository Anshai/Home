import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicBootComponent} from './boot/public-boot.component';
import {PublicHomeComponent} from './components/public-home/public.home.component';
import {PublicRoutingModule} from './public-routing.module';
import {NapiIgeComponent} from './components/public-home/napi-ige/napi-ige.component';



@NgModule({
  declarations: [
    PublicBootComponent,
    PublicHomeComponent,
    NapiIgeComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
