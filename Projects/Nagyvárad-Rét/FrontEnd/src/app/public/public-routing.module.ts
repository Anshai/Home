import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicBootComponent} from './boot/public-boot.component';
import {PublicHomeComponent} from './components/public-home/public.home.component';
import {NotFoundComponent} from '../shared/components/not-found/not-found.component';
import {NapiIgeResolverService} from "./services/napi-ige.resolver";

const routes: Routes = [
  {path: '', component: PublicBootComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: PublicHomeComponent, resolve: {napiIge: NapiIgeResolverService}},
      // Other Paths
      // {path: '**', redirectTo: 'not-found'},
      // {path: 'not-found', component: NotFoundComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicRoutingModule {}
