import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface BreadcrumbItem {
  label: string;
  href?: string | null;
}
@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbItem[] = [];
}
