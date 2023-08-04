import { Component, ViewChild, OnInit } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Store } from '@ngrx/store';
import * as fromApp from '../../@core/stores/app/app.reducer';
import * as AuthActions from '../../@core/stores/auth/auth.actions';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-webapp',
  templateUrl: './webapp.component.html',
  styleUrls: ['./webapp.component.scss'],
})
export class WebappComponent implements OnInit {
  isSideNavCollapsed = false;
  screenWidth = 0;
  toggled = false;
  data!: string | null;
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
  
  }

  onToggleSideNav(data: SideNavToggle) {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
    this.toggled = false;
  }

  getBodyClass(): string {
    let styleClass = '';
    if (this.isSideNavCollapsed && this.screenWidth > 788) {
      styleClass = 'body-trimmed';
    } else if (this.toggled) {
      styleClass = 'body-opacity';
    }
    return styleClass;
  }

  mobileToggle() {
    this.sidebar.mobileView();
    this.toggled = true;
  }

  close() {
    this.sidebar.closeSidenav();
  }
}
