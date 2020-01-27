import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from '../shared/components/not-found/not-found.component';
import {PublicModule} from '../public/public.module';

const appRotues: Routes = [
  {path: '', redirectTo: 'public', pathMatch: 'full'},
  {path: 'public', loadChildren: () => import('../public/public.module').then(mod =>
      mod.PublicModule)},
    // AUTH GUARD INCOMING
  {path: 'admin', loadChildren: () => import('../admin/admin.module').then(mod =>
      mod.AdminModule)},
  {path: '**', redirectTo: 'not-found'},
  {path: 'not-found', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRotues, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
