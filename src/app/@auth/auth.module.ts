import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../@core/stores/auth/auth.effects';
import { CommonModule } from '@angular/common';
import { NotificationModule } from '../@core/shared/notification/notification.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NotificationModule,
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}
