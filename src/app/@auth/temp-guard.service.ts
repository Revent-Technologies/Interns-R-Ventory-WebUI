import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../@core/services/auth.service';
import { getAuthPermission } from '../@core/stores/auth/auth.selectors';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/@core/stores/app/app.reducer';

@Injectable({
  providedIn: 'root',
})
export class TempGuardService implements CanActivate, OnInit {
  subscription = new Subscription();
  loggedIn!: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // Fetch data
    this.subscription.add(
      this.store.select(getAuthPermission).subscribe((data) => {
        this.loggedIn = data;
      })
    );
    if (this.loggedIn) {
      return true;
    } else {
      this.router.navigate(['auth']);
      return false;
    }
  }
}
