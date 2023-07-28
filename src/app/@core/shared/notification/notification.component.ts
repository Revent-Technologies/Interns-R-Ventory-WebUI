import { Component, Inject, ElementRef, Input } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';
import { Notification } from '../../interfaces';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {


  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: Notification,
    private snackBar: MatSnackBar,
    private elementRef: ElementRef
  ) {}

  closeNotification() {
    this.elementRef.nativeElement.addEventListener('click', () => {
      this.snackBar.dismiss();
    });
  }
}
