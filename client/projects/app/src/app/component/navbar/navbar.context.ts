import { Injectable } from '@angular/core';
import { ViewContext } from '@view/base';

@Injectable({ providedIn: 'root' })
export class NavbarContext extends ViewContext {
  setActiveItem(): void {}
  getActiveItem(filter?: any) {}
  getViewData(filter?: any) {}
}
