import { Directive, inject, OnDestroy } from '@angular/core';
import { explicitEffect } from 'ngxtension/explicit-effect';
import { VIEW_RENDER_REGISTRY } from '../view.render.registry';
import { VIEW_ACTIVE_REGISTRY } from '../view.active.registry';

/**
 * Defines the View mode activating In to set the mode
 * This should be use in header
 */
@Directive({ standalone: true })
export class ViewModeActivatingInDirective implements OnDestroy {
  private readonly _viewRenderRegistry = inject(VIEW_RENDER_REGISTRY);
  private readonly _viewActiveRegistry = inject(VIEW_ACTIVE_REGISTRY);

  #eevm = explicitEffect([this._viewRenderRegistry.getViewMode], ([vm]) => {
    this._viewActiveRegistry.setActiveViewData(this._viewActiveRegistry.getActiveView(), { viewMode: vm });
  });

  ngOnDestroy(): void {
    this.#eevm.destroy();
  }
}
