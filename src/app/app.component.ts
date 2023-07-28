import { Component, OnInit } from '@angular/core';
import { NotificationService } from './@core/services/notification.service';
import { Notification } from './@core/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.listenToOfflineOnlineState();
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
}
