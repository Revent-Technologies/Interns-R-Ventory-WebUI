import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../@core/stores/app/app.reducer';
import * as AuthActions from '../../@core/stores/auth/auth.actions';
import { Notification } from '../interfaces';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit, OnDestroy {
  timer: any;
  private readonly idleTimeout = 60 * 60 * 1000; // 1 hour in milliseconds
  private isLoggedIn = false;
  notification: Notification = {
    state: 'success',
    title: 'System Notification',
    message: 'You were logged out successfully',
  };

  constructor(
    private store: Store<fromApp.AppState>,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    console.log();
  }

  resetTimer(): void {
    clearTimeout(this.timer);
    if (this.isLoggedIn) {
      this.timer = setTimeout(() => {
        // Dispatch logout action here
        this.store.dispatch(AuthActions.logoutStart());
        this.notificationService.openSnackBar(
          this.notification,
          'zns-notification-success'
        );
      }, this.idleTimeout);
    }
  }

  private onUserActivity(): void {
    this.resetTimer();
  }

  public startActivityTracking(): void {
    this.isLoggedIn = true;
    this.resetTimer();
    document.body.addEventListener('click', this.onUserActivity.bind(this));
    document.body.addEventListener('keydown', this.onUserActivity.bind(this));
    document.body.addEventListener('mousemove', this.onUserActivity.bind(this));
  }

  public stopTracking(): void {
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

  ngOnDestroy(): void {}
}
