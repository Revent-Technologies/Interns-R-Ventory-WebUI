import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../@core/stores/app/app.reducer';
import * as AuthActions from '../../@core/stores/auth/auth.actions';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  timer: any;

  private readonly idleTimeout = 60 * 60 * 1000; // 1 hour in milliseconds
  private isLoggedIn = false;

  constructor(
    private store: Store<fromApp.AppState>,
    private notificationService: NotificationService
  ) {}

  startActivityTracking(): void {
    this.isLoggedIn = true;

    this.resetTimer();

    document.body.addEventListener('click', this.onUserActivity.bind(this));
    document.body.addEventListener('keydown', this.onUserActivity.bind(this));
    document.body.addEventListener('mousemove', this.onUserActivity.bind(this));
  }

  resetTimer(): void {
    clearTimeout(this.timer);

    if (this.isLoggedIn) {
      this.timer = setTimeout(() => {
        // Dispatch logout action here
        this.store.dispatch(AuthActions.LogoutStart());
<<<<<<< HEAD
=======

>>>>>>> 8445dd6b1388ad8b8666c66aede94492828cbf7e
        this.notificationService.openSnackBar(
          {
            state: 'success',
            title: 'System Notification',
            message: 'You were logged out successfully',
          },
          'zns-notification-success'
        );
      }, 10000);
    }
  }

  private onUserActivity(): void {
    this.resetTimer();
  }

  stopTracking(): void {
    this.isLoggedIn = false;

    clearTimeout(this.timer); // Clear the timer when stopping the tracking

    document.body.removeEventListener('click', this.onUserActivity.bind(this));

    document.body.removeEventListener(
      'keydown',
      this.onUserActivity.bind(this)
    );

    document.body.removeEventListener(
      'mousemove',
      this.onUserActivity.bind(this)
    );
  }
}
