import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PublicBootComponent} from "./components/boot/public-boot.component";
import {PublicHomeComponent} from "./components/public-home/public-home.component";
import {PublicNewsComponent} from "./components/public-news/public-news.component";

const routes: Routes = [
  {path: '', component: PublicBootComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: PublicHomeComponent},
      {path: 'news', component: PublicNewsComponent}
    ]}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicRoutingModule {}
