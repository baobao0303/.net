// header.component.ts
import { Component, Input, signal } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { ViewContainerRef } from '@angular/core';
import { ModalService } from '@core/base';
import { LoginModalComponent } from '../../component/login-modal/login-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public commitments = signal([
    {
      title: '100% hàng thật',
      icon: '/public/icons/authentic-products.png',
    },
    {
      title: 'Freeship mọi đơn',
      icon: '/public/icons/shipping-policy.png',
    },
    {
      title: 'Hoàn 200% nếu hàng giả',
      icon: '/public/icons/price-guarantee.png',
    },
    {
      title: '30 ngày đổi trả',
      icon: '/public/icons/return-policy.png',
    },
    {
      title: 'Giao nhanh 2h',
      icon: '/public/icons/fast-delivery.png',
    },
    {
      title: 'Giá siêu rẻ',
      icon: '/public/icons/super-cheap-prices.png',
    },
  ]);
  @Input() set containerRef(ref: ViewContainerRef | null) {
    if (ref) {
      this.modalService.setRootViewContainerRef(ref);
    }
  }

  constructor(private modalService: ModalService) {}

  openLoginModal() {
    const componentRef = this.modalService.openModal(LoginModalComponent);
    componentRef.instance.componentRef = componentRef;
  }
}
