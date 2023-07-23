import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './website.component';
import { ForgotPasswordComponent } from 'src/app/@auth/forgot-password/forgot-password.component';

const routes: Routes = [{ path: '', component: WebsiteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
