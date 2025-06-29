import { CommonModule } from '@angular/common';
// home-page.component.ts
import { Component, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { DynamicHostDirective } from '@view/base';

export interface CommonItem {
  title: string;
  href: string;
  image: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, DynamicHostDirective],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePage {
  public categories = signal<CommonItem[]>([
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
  public quickActions = signal<CommonItem[]>([
    {
      title: 'Ưu đãi thẻ, ví',
      href: '/uu-dai-the-vi',
      image: '/assets/icons/wallet.png',
    },
    {
      title: 'Đóng tiền, nạp thẻ',
      href: '/dong-tien-nap-the',
      image: '/assets/icons/topup.png',
    },
    {
      title: 'Mua trước trả sau',
      href: '/mua-truoc-tra-sau',
      image: '/assets/icons/pay-later.png',
    },
  ]);
  public seller = signal<CommonItem[]>([
    {
      title: 'Bán hàng cùng tiki',
      href: '/mua-truoc-tra-sau',
      image: '/assets/icons/pay-later.png',
    },
  ]);

  public quickLinks = signal<CommonItem[]>([
    {
      title: 'TOP DEAL',
      href: '#',
      image:
        'https://salt.tikicdn.com/ts/upload/2f/52/8e/00ab5fbea9d35fcc3cadbc28d7c6b14e.png',
    },
    {
      title: 'Tiki Trading',
      href: '#',
      image:
        'https://salt.tikicdn.com/ts/upload/72/8d/23/a810d76829d245ddd87459150cb6bc77.png',
    },
    {
      title: 'Coupon siêu hot',
      href: '#',
      image:
        'https://salt.tikicdn.com/ts/upload/8b/a4/9f/84d844f70e365515b6e4e3e745dac1d5.png',
    },
    {
      title: 'Xả kho giảm nửa giá',
      href: '#',
      image:
        'https://salt.tikicdn.com/ts/upload/a5/d8/06/cb6ff520f12973013c81a8b14ad5e5b3.png',
    },
    {
      title: 'Tiki sáng nay rẻ',
      href: '#',
      image:
        'https://salt.tikicdn.com/ts/upload/1c/1d/ab/a8853ac90be1473f095ee2437bab90ab.png',
    },
    {
      title: 'Chống nắng toàn diện',
      href: '#',
      image:
        'https://salt.tikicdn.com/ts/upload/c6/9c/4b/b62e8fe17cd7e18e2f2dcda2e1854387.png',
    },
    {
      title: 'Top Sách bán chạy',
      href: '#',
      image:
        'https://salt.tikicdn.com/ts/upload/4a/47/32/96cd0a5ab8f34621667f47a05e08d8b0.png',
    },
    {
      title: 'Combo siêu tiết kiệm',
      href: '#',
      image:
        'https://salt.tikicdn.com/ts/upload/8a/39/6b/4e1827112e313e1c0540acb924f9e95b.png',
    },
    {
      title: 'Mừng Ngày Của Cha 2025',
      href: '#',
      image:
        'https://salt.tikicdn.com/ts/upload/a2/cf/84/dab5e2a933efdbdb13962282999af39d.png',
    },
    {
      title: 'Hạ nhiệt thần tốc',
      href: '#',
      image:
        'https://salt.tikicdn.com/ts/upload/bd/b9/47/0851939e66a940edbbd5bea766cf06de.png',
    },
  ]);
  @ViewChild(DynamicHostDirective, { static: true })
  dynamicHost!: DynamicHostDirective;

  get containerRef(): ViewContainerRef | null {
    return this.dynamicHost?.viewContainerRef ?? null;
  }
}
