import { Component, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header.component';
import { DynamicHostDirective } from '@view/base';
import {
  BreadcrumbComponent,
  BreadcrumbItem,
} from '../../components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [CommonModule, HeaderComponent, BreadcrumbComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  query = signal<string>('');
  breadcrumbItems = signal<BreadcrumbItem[]>([
    { label: 'Trang chủ', href: '/' },
  ]);
  filters = [
    {
      icon: 'https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png',
      label: 'Giao siêu tốc 2H',
      active: false,
    },
    {
      icon: 'https://salt.tikicdn.com/ts/upload/b5/aa/48/2305c5e08e536cfb840043df12818146.png',
      label: 'Siêu rẻ',
      active: false,
    },
    {
      icon: 'https://salt.tikicdn.com/ts/upload/2f/20/77/0f96cfafdf7855d5e7fe076dd4f34ce0.png',
      label: '',
      active: false,
    },
    {
      icon: '',
      label: 'từ 4 sao',
      active: false,
      rating: 4.5,
    },
  ];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.query.set(params['q'] ?? '');
      this.breadcrumbItems.update((items) => [
        ...items,
        { label: `Kết quả tìm kiếm "${this.query() ?? ''}"`, href: null },
      ]);
      console.log('Search query:', this.query);
    });
  }
  @ViewChild(DynamicHostDirective, { static: true })
  dynamicHost!: DynamicHostDirective;

  get containerRef(): ViewContainerRef | null {
    return this.dynamicHost?.viewContainerRef ?? null;
  }

  getFloor(value: number): number {
    return Math.floor(value);
  }
}
