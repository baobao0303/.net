import { CommonModule } from '@angular/common';
import { Component, ComponentRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalService } from '@core/base';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordModalComponent {
  accountInfo = '';
  componentRef!: ComponentRef<any>;

  constructor(private modalService: ModalService) {}

  closeModal() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  goBack() {
    // Import và mở lại EmailLoginModalComponent
    import('../email-login-modal/email-login-modal.component').then(
      ({ EmailLoginModalComponent }) => {
        this.closeModal();
        const componentRef = this.modalService.openModal(
          EmailLoginModalComponent
        );
        componentRef.instance.componentRef = componentRef;
      }
    );
  }

  onResetPassword() {
    console.log('Reset password for:', this.accountInfo);
    // Implement reset password logic here
  }
}
