import { Component, OnInit } from '@angular/core';
import { VIEW_CONTEXT, ViewBase } from '@view/base';
import { NavbarContext } from './navbar.context';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [{ provide: VIEW_CONTEXT, useClass: NavbarContext }],
})
export class NavbarComponent extends ViewBase implements OnInit {
  isMenuOpen = false;
  searchQuery = '';
  isUserDropdownOpen = false;
  cartItemCount = 0;

  categories = [
    'điện gia dụng',
    'xe cộ',
    'mẹ & bé',
    'khỏe đẹp',
    'nhà cửa',
    'sách',
    'thể thao',
  ];

  popularSearches = [
    'iPhone 15',
    'Samsung Galaxy',
    'Laptop gaming',
    'Tai nghe bluetooth',
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleUserDropdown(): void {
    this.isUserDropdownOpen = !this.isUserDropdownOpen;
  }

  onSearch(): void {
    console.log('Searching for:', this.searchQuery);
  }

  onSearchInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input?.value ?? '';
    console.log('Search input:', value);
    this.searchQuery = value;
  }

  ngOnInit(): void {
    this.navbarContext().submit();
  }
  public navbarContext() {
    return this.getContextAs<NavbarContext>();
  }
}
