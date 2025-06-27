import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductQueryHandler } from '@application/queries';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { ViewContext } from '@view/base';
import { ProductRequest } from '@application/messages';

@Injectable({ providedIn: 'root' })
export class NavbarContext extends ViewContext {
  private readonly productQueryHandler = inject(ProductQueryHandler);
  private _productRequest = new ProductRequest();
  private destroyRef = inject(DestroyRef);

  public submit() {
    this.productQueryHandler
      .handle(this._productRequest)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          console.log('Product response:', response);
        },
      });
  }
  setActiveItem(): void {}
  getActiveItem(filter?: any) {}
  getViewData(filter?: any) {}
}
