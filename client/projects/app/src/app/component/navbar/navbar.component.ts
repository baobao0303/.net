import { Component, OnInit } from '@angular/core';
import { VIEW_CONTEXT, ViewBase } from '@view/base';
import { NavbarContext } from './navbar.context';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [{ provide: VIEW_CONTEXT, useClass: NavbarContext }],
})
export class NavbarComponent extends ViewBase implements OnInit {
  ngOnInit(): void {
    this.navbarContext().submit();
  }
  public navbarContext() {
    return this.getContextAs<NavbarContext>();
  }
}
