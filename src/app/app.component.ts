import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from './@core/services/notification.service';
import { Notification } from './@core/interfaces';
import { Store } from '@ngrx/store';
import * as fromApp from './@core/stores/app/app.reducer';
import * as AuthActions from './@core/stores/auth/auth.actions';
import { AuthService } from './@core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  data!: string | null;

  constructor(
    private notificationService: NotificationService,
    private store: Store<fromApp.AppState>,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('userData')!);

    if (data) {
      this.store.dispatch(
        AuthActions.LoginSuccess({ username: data.username })
      );

      // Start tracking user activity
      this.authService.startActivityTracking();
    }
  }

  listenToOfflineOnlineState() {
    window.addEventListener('online', () => {
      const notification: Notification = {
        state: 'success',
        title: 'System Notification',
        message: "You're back online",
      };

      this.notificationService.openSnackBar(
        notification,
        'zns-notification-success'
      );
    });

    window.addEventListener('offline', () => {
      const notification: Notification = {
        state: 'warning',
        title: 'System Notification',
        message: "You're offline",
      };

      this.notificationService.openSnackBar(
        notification,
        'zns-notification-warning'
      );
    });
  }

  ngOnDestroy(): void {}
}
