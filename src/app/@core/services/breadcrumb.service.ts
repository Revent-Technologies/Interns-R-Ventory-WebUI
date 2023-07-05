import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Breadcrumb } from '../interfaces/bread-crumbs.interface';
import { distinctUntilChanged, filter, map, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  breadcrumbs$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    distinctUntilChanged(),
    startWith(true),
    map((event) => this.buildBreadcrumbs(this.activatedRoute.root))
  );

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  buildBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Breadcrumb[] = []
  ): Breadcrumb[] {
    const label =
      route.routeConfig && route.routeConfig.data
        ? route.routeConfig.data['breadcrumb']
        : '';
    const path = route.routeConfig ? route.routeConfig.path : '';
    const nextUrl = `${url}${path}/`;

    const breadcrumb: Breadcrumb = {
      label: label,
      url: nextUrl,
    };

    const newBreadcrumbs = label ? [...breadcrumbs, breadcrumb] : breadcrumbs;
    if (route.firstChild) {
      return this.buildBreadcrumbs(route.firstChild, nextUrl, newBreadcrumbs);
    }

    return newBreadcrumbs;
  }
}
