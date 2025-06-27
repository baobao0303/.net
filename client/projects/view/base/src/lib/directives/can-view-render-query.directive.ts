import { AfterViewInit, Directive, inject, OnDestroy } from '@angular/core';
import { VIEW_RENDER_REGISTRY } from '../view.render.registry';
import { VIEW_CONTEXT } from '../view.aggregation.context';

/**
 * Defines the Command Directive to register the new command automatically.
 */
@Directive({ standalone: true })
export class CanViewRenderQueryDirective implements AfterViewInit, OnDestroy {
  private _context = inject(VIEW_CONTEXT);
  private _viewRender = inject(VIEW_RENDER_REGISTRY);
  private register(): void {}

  private reload(): void {}
  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    console.log('[CanViewRenderQueryDirective] Destroyed ...');
  }
}
