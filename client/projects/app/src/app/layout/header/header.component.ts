// header.component.ts
import { Component, Input } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { ViewContainerRef } from '@angular/core';
import { ModalService } from '@core/base';
import { LoginModalComponent } from '../../component/login-modal/login-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
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
