import {NgModule} from "@angular/core";
import {PublicRoutingModule} from "./public-routing.module";
import {PublicBootComponent} from "./components/boot/public-boot.component";
import {PublicHomeComponent} from "./components/public-home/public-home.component";
import {PublicNewsComponent} from "./components/public-news/public-news.component";
// import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    PublicBootComponent,
    PublicHomeComponent,
    PublicNewsComponent
  ],
  imports: [
    PublicRoutingModule
  ],
  exports: [],
})

export class PublicModule {}
