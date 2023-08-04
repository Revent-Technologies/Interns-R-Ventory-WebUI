import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',

    // loadChildren: () =>
    //   import('src/app/@components/website/website.module').then(
    //     (m) => m.WebsiteModule
    //   ),
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('src/app/@auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: 'app',
    loadChildren: () =>
      import('src/app/@components/webapp/webapp.module').then(
        (m) => m.WebappModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
