import { Directive, inject, OnDestroy } from '@angular/core';
import { explicitEffect } from 'ngxtension/explicit-effect';
import { VIEW_RENDER_REGISTRY } from '../view.render.registry';
import { ViewMode } from '../view.type';
import { VIEW_ACTIVE_REGISTRY } from '../view.active.registry';

/**
 * Defines the View mode activating to set mode in main view
 * It should be used in the main view
 */
@Directive({ standalone: true })
export class ViewModeActivatingOutDirective implements OnDestroy {
  private readonly _viewRenderRegister = inject(VIEW_RENDER_REGISTRY);
  private readonly _viewActiveRegistry = inject(VIEW_ACTIVE_REGISTRY);

  #eevmd = explicitEffect([this._viewActiveRegistry.getActiveViewData], ([avd]) => {
    if (avd && avd?.['viewMode']) {
      this._viewRenderRegister.setViewMode(avd?.['viewMode'] as ViewMode);
    }
  });

  ngOnDestroy(): void {
    this.#eevmd.destroy();
  }
}
