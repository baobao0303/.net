import { FocusMonitor } from '@angular/cdk/a11y';
import { AfterViewInit, DestroyRef, Directive, ElementRef, inject, OnDestroy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { VIEW_ACTIVE_REGISTRY } from '../view.active.registry';
import { VIEW_RENDER_REGISTRY } from '../view.render.registry';

/**
 * Defines the View mode activating In to set the mode
 * This should be use in header
 */
@Directive({ standalone: true })
export class ViewActivatingDirective implements AfterViewInit, OnDestroy {
  private destroyRef = inject(DestroyRef);
  /** To monitor the focus of the current component */
  private readonly focusMonitor = inject(FocusMonitor);

  /** To inject the current component */
  private readonly elementRef = inject(ElementRef, { self: true });

  private readonly _viewActiveRegistry = inject(VIEW_ACTIVE_REGISTRY);
  private readonly _viewRender = inject(VIEW_RENDER_REGISTRY);

  ngAfterViewInit() {
    this.focusMonitor
      .monitor(this.elementRef, true)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((origin) => {
        if (origin) {
          this._viewActiveRegistry.setActiveView(this._viewRender.viewName());
          if (this._viewRender) {
            this._viewRender.setFocused(true);
          }
          console.log(`Activating (focus) the component: ${this._viewRender.viewName()}`);
        } else {
          if (this._viewRender) {
            this._viewRender.setFocused(false);
          }
          console.log(`Inactivating (lost focus) the component: ${this._viewRender.viewName()}`);
        }
      });
  }

  ngOnDestroy(): void {
    /** Stop monitor the current component */
    this.focusMonitor.stopMonitoring(this.elementRef);
  }
}
