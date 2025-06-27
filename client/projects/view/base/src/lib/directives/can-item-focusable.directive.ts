import { FocusableOption, FocusOrigin } from '@angular/cdk/a11y';
import { Directive, ElementRef, HostBinding, inject, input, output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[can-item-focusable], [canItemFocusable]',
  standalone: true,
  host: {
    '(focus)': 'focus()',
  },
})
export class CanItemFocusableDirective implements FocusableOption {
  readonly elementRef = inject(ElementRef);

  readonly focusItem = input<any>();
  readonly focusIndex = input<number>();
  readonly focusItemChanged = output<any>();

  /**
   * The function will be called by FocusKeyManager
   * @param origin The origin of the focus event (e.g., keyboard, mouse)
   */
  public focus(origin?: FocusOrigin): void {
    if (this.elementRef?.nativeElement) {
      // Set focus on the element
      this.elementRef.nativeElement.focus();
      this.focusItemChanged.emit(this.focusItem);
    }
  }
}
