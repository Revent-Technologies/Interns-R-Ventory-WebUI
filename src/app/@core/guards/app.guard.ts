import { Injectable, OnDestroy } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as fromApp from '../stores/app/app.reducer';
import * as authSelectors from '../stores/auth/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AppGuard
  implements CanActivate, CanActivateChild, CanLoad, OnDestroy
{
  userPermissions!: string[];

  private subscription: Subscription = new Subscription();

  constructor(private store: Store<fromApp.AppState>, private router: Router) {
    const userPermissions = this.store.pipe(
      select(authSelectors.getUserPermissions)
    );

    this.subscription.add(
      userPermissions.subscribe((permissions) => {
        if (permissions) {
          this.userPermissions = [...permissions];
        }
      })
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.checkChildRoutes(childRoute, state)) {
      return true;
    } else {
      this.router.navigate(['/unauthorized-page']);
      return false;
    }
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }

  checkChildRoutes(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    /************************** Dashboard ***************************/
    if (
      state.url === '/app/dashboard' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      /************************** Document ***************************/
      (state.url.includes('/app/doc/e/setup') ||
        state.url.includes('/app/doc/e/editor')) &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    }
    /*************************** Inbox *****************************/
    //  else if (
    //   state.url === '/app/inbox' &&
    //   this.checkForPermissions(route.data['permissions'])
    // ) {
    //   // Not authorized
    //   return false;
    // } else if (
    //   state.url === '/app/inbox/view/:id/:documentId' &&
    //   this.checkForPermissions(route.data['permissions'])
    // ) {
    //   // Not authorized
    //   return false;
    // }
    else if (
      /****************************** Audit *******************************/
      state.url === '/app/audit' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      /*************************** Contact *****************************/
      state.url === '/app/contact' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url.includes('/app/contact/create') &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url.includes('/app/contact/edit') &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      /********************* Transaction Management ***********************/
      state.url === '/app/transaction-management' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      /*********************** Account Settings *************************/
      state.url === '/app/account-settings/profile' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url === '/app/account-settings/organization' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url === '/app/account-settings/organization/division' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url === '/app/account-settings/organization/department' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url === '/app/account-settings/organization/unit' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url === '/app/account-settings/team' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url.includes('app/account-settings/team/profile') &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url === '/app/account-settings/feature-configuration' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url === '/app/account-settings/role' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url === '/app/account-settings/role/create' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url.includes('/app/account-settings/role/edit') &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url.includes('/app/account-settings/customization') &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url.includes('/app/account-settings/process-category') &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url.includes('/app/account-settings/contact-category') &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url.includes('/app/account-settings/product-configuration') &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url.includes('/app/account-settings/billing') &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url === '/app/account-settings/billing/information' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url === '/app/account-settings/billing/history' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    }
    //  else if (
    //   state.url === '/app/change-plan' &&
    //   this.checkForPermissions(route.data['permissions'])
    // ) {
    //   // Not authorized
    //   return false;
    // }
    else if (
      state.url === '/app/account-settings/subscription-plan-configuration' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url.includes(
        '/app/account-settings/subscription-plan-configuration/create'
      ) &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url.includes(
        '/app/account-settings/subscription-plan-configuration/edit'
      ) &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url ===
        '/app/account-settings/subscription-plan-configuration/create-storage' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url.includes(
        '/app/account-settings/subscription-plan-configuration/edit-storage'
      ) &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url === '/app/account-settings/control-configuration' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url === '/app/account-settings/control-configuration/create' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url === '/app/account-settings/control-configuration/edit' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url === '/app/account-settings/default-role-configuration' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url === '/app/account-settings/default-role-configuration/create' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      state.url.includes(
        '/app/account-settings/default-role-configuration/edit'
      ) &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      /********************* Subscriber Management ***********************/
      state.url === '/app/subscriber-management' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    }
    //  else if (
    //   /************************ Payment Management **************************/
    //   state.url === '/app/payment-management' &&
    //   this.checkForPermissions(route.data['permissions'])
    // ) {
    //   // Not authorized
    //   return false;
    // }
    else if (
      /********************* Developer Dashboard ***********************/
      state.url === '/app/developer-dashboard' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      /********************* Application management ***********************/
      state.url === '/app/application-management' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else if (
      /********************* Audit Logs ***********************/
      state.url === '/app/audit-logs' &&
      this.checkForPermissions(route.data['permissions'])
    ) {
      // Not authorized
      return false;
    } else {
      return true;
    }
  }

  checkForPermissions(permissions: string[]) {
    if (permissions && permissions.length > 0) {
      return permissions.every((permission) => {
        return !this.userPermissions.includes(permission);
      });
    } else {
      return false;
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
