import { CommonModule } from '@angular/common';
// home-page.component.ts
import { Component, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { DynamicHostDirective } from '@view/base';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, DynamicHostDirective],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePage {
  public categories = signal([
    {
      title: 'Nhà Sách Tiki',
      href: '/nha-sach-tiki/c8322',
      image: '/assets/icons/authentic-products.png',
    },
    {
      title: 'Đồ chơi',
      href: '/do-choi/c123',
      image: '/assets/icons/toys.png',
    },
  ]);
  @ViewChild(DynamicHostDirective, { static: true })
  dynamicHost!: DynamicHostDirective;

  get containerRef(): ViewContainerRef | null {
    return this.dynamicHost?.viewContainerRef ?? null;
  }
}
