import { Component, DOCUMENT, inject, Renderer2 } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { BROWSER_STORAGE } from '@infrastructure/base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false,
  providers: [{ provide: VIEW_CONTEXT, useClass: NavbarContext }],
})
export class AppComponent {
  private readonly router = inject(Router);
  private readonly _document = inject(DOCUMENT);
  private readonly _storage = inject(BROWSER_STORAGE);
  private readonly _renderer = inject(Renderer2);

  public isLoading = false;

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.isLoading = false;
      }
    });
  }
}
