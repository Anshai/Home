import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicBootComponent} from './boot/public-boot.component';
import {PublicHomeComponent} from './components/public-home/public.home.component';
import {NotFoundComponent} from '../shared/components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: PublicBootComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: PublicHomeComponent},
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
