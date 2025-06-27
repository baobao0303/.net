import { Component } from '@angular/core';
import { VIEW_CONTEXT } from '@view/base';
import { NavbarContext } from './navbar.context';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [{ provide: VIEW_CONTEXT, useClass: NavbarContext }],
})
export class NavbarComponent {}
