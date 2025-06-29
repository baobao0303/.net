import { CommonModule } from '@angular/common';
import { Component, ComponentRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss',
  standalone: true,
})
export class LoginModalComponent {
  phoneNumber = '';
  componentRef!: ComponentRef<any>;

  closeModal() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  filterNonDigits(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const onlyDigits = inputElement.value.replace(/\D+/g, '');
    inputElement.value = onlyDigits;
    this.phoneNumber = onlyDigits;
  }
  blockNonDigits(event: KeyboardEvent) {
    const charCode = event.key;
    if (!/^\d$/.test(charCode)) {
      event.preventDefault();
    }
  }

  handlePaste(event: ClipboardEvent) {
    const pastedInput: string = event.clipboardData?.getData('text') || '';
    console.log('Pasted input:', pastedInput);
    if (/\D/.test(pastedInput)) {
      event.preventDefault();
      this.phoneNumber = '';
    }
  }

  onContinue() {
    console.log('Continue with phone:', this.phoneNumber);
    // Implement continue logic here
  }

  switchToEmail(event: Event) {
    event.preventDefault();
    console.log('Switch to email login');
    // Implement email login switch
  }

  loginWithFacebook() {
    console.log('Login with Facebook');
    // Implement Facebook login
  }

  loginWithGoogle() {
    console.log('Login with Google');
    // Implement Google login
  }
}
