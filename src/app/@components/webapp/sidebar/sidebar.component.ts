import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../@core/stores/app/app.reducer';
import * as AuthActions from '../../../@core/stores/auth/auth.actions';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('200ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  @Output() onToggleSideNav = new EventEmitter<SideNavToggle>();
  mobile_close = true;

  constructor(private store: Store<fromApp.AppState>){}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }



  collapsed = false;
  screenWidth = 0;

  mobileView() {
    this.mobile_close = false;
    this.innerToggle();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }

  innerToggle() {
    this.collapsed = true;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    if (this.mobile_close === false) {
      this.mobile_close = true;
    }
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  closeSidenav(): void {
    this.collapsed = false;
    if (this.mobile_close === false) {
      this.mobile_close = true;
    }
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  logOutApp(){
    this.store.dispatch(AuthActions.logoutStart());
  }
}
