import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "../shared/components/not-found/not-found.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'public', pathMatch: 'full'},
  {path: 'public', loadChildren: '../public/public.module#PublicModule'},
  {path: 'admin', loadChildren: '../admin/admin.module#AdminModule'},
  {path: '**', redirectTo: 'not-found'},
  {path: 'not-found', component: NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
