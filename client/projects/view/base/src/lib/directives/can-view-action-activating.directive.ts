import { Directive, HostListener, inject, input, OnDestroy, output } from '@angular/core';
import { explicitEffect } from 'ngxtension/explicit-effect';
import { VIEW_ACTION } from '../view.render.registry';
import { ViewMode } from '../view.type';

/**
 * Use directive to handle the state of the button / li / or any element
 * It will disable or enable the element ref corresponding
 */
@Directive({
  selector: '[can-view-action-activating]',
  standalone: true,
})
export class CanViewActionActivatingDirective implements OnDestroy {
  /** Input mode with defaule VIEW */
  public mode = input<ViewMode>('VIEW');
  /** Output mode - The name modeChange as the naming [(mode)] for input and output */
  public modeChange = output<ViewMode>();
  public defaultWithModeCommand = input<ViewMode>('VIEW');
  public disabledWithMode = input<ViewMode[]>();
  public enableWithMode = input<ViewMode[]>();

  private _viewAction = inject(VIEW_ACTION);

  private eDs = explicitEffect([this.mode], ([m]) => {
    const dm = this.disabledWithMode()?.filter((item) => item == m);
    if (dm != undefined && dm.length > 0) {
      this._viewAction?.setDisabled(true);
    } else {
      const em = this.enableWithMode()?.filter((item) => item == m);
      if (em != undefined && em.length > 0) {
        this._viewAction?.setDisabled(false);
      }
    }
    this.modeChange.emit(m);
  });

  @HostListener('click', ['$event'])
  @HostListener('dblclick', ['$event'])
  public onClick(e: Event) {
    this.modeChange.emit(this.defaultWithModeCommand());
  }

  ngOnDestroy(): void {
    this.eDs.destroy();
    console.log('[CanViewActionActivatingDirective] Destroyed ...');
  }
}
