import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'src/app/@core/interfaces/bread-crumbs.interface';
import { BreadcrumbService } from 'src/app/@core/services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
  }
}
