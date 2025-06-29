import { Component, inject, OnInit } from '@angular/core';
import { VIEW_CONTEXT, ViewBase } from '@view/base';
import { NavbarContext } from './component/navbar/navbar.context';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false,
  providers: [{ provide: VIEW_CONTEXT, useClass: NavbarContext }],
})
export class AppComponent implements OnInit {
  private navbarContext = inject(NavbarContext);
  ngOnInit(): void {
    this.navbarContext.submit();
  }
}
