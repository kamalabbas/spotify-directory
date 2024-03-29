import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ArtistRegistrationComponent } from './components/artist-registration/artist-registration.component';

const routes: Routes = [
  // default route
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'artist-register',
    component: ArtistRegistrationComponent
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'artist/:id',
    loadChildren: () =>
      import('./components/artist/artist.module').then((m) => m.ArtistModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
