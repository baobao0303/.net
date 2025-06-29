import { Component, ComponentRef } from '@angular/core';
import { ForgotPasswordModalComponent } from '../forgot-password/forgot-password.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalService } from '@core/base';

@Component({
  selector: 'app-email-login-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './email-login-modal.component.html',
  styleUrl: './email-login-modal.component.scss',
})
export class EmailLoginModalComponent {
  email = '';
  password = '';
  showPassword = false;
  componentRef!: ComponentRef<any>;

  constructor(private modalService: ModalService) {}

  closeModal() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  goBack() {
    // Import và mở lại LoginModalComponent
    import('../login-modal/login-modal.component').then(
      ({ LoginModalComponent }) => {
        this.closeModal();
        const componentRef = this.modalService.openModal(LoginModalComponent);
        componentRef.instance.componentRef = componentRef;
      }
    );
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    console.log('Login with email:', this.email, 'password:', this.password);
    // Implement login logic here
  }

  openForgotPassword(event: Event) {
    event.preventDefault();
    this.closeModal();
    const componentRef = this.modalService.openModal(
      ForgotPasswordModalComponent
    );
    componentRef.instance.componentRef = componentRef;
  }

  onRegister(event: Event) {
    event.preventDefault();
    console.log('Register new account');
    // Implement register logic here
  }
}
