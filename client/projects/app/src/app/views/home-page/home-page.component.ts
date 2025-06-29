import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true,
  imports: [NavbarComponent],
})
export class HomePage {}
