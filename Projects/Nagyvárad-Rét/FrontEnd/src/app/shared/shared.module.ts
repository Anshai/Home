import {NgModule} from "@angular/core";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    NotFoundComponent
  ]
})

export class SharedModule {}
