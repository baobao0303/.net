import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, inject, Injector, OnDestroy, Renderer2, runInInjectionContext } from '@angular/core';
import { ViewCommandMap, ViewCommandMediator, ViewCommandType } from '../view.command.mediator';
import { VIEW_COMMAND_REGISTRY, ViewCommandRegistry } from '../view.command.registry';

/**
 * Defines the Command Directive to register the new command automatically.
 */
@Directive({ standalone: true })
export class CanCommandDirective implements AfterViewInit, OnDestroy {
  private readonly _renderer = inject(Renderer2);
  private readonly _injector = inject(Injector);
  private readonly _viewCommandMediator = inject(ViewCommandMediator);
  private readonly _viewCommandRegistry: ViewCommandRegistry = inject(VIEW_COMMAND_REGISTRY);
  protected readonly _document = inject(DOCUMENT);

  private _activeViewName: string = this._viewCommandRegistry.viewName();

  private _keyboardEventRegister(): void {
    const viewCommands: ViewCommandMap = this._viewCommandMediator.getViewCommandsByProperty('isShortcutRegister', false);

    viewCommands.forEach((commands: ViewCommandType[], key: string) => {
      commands.forEach((command) => {
        // TODO: check _activeViewName against command.viewName
        command.isShortcutRegister = true;
        command.toRemoveListener = this._renderer.listen('window', `${key}`, (event: KeyboardEvent) => this._viewCommandMediator.onKeydownEventHandler(event, undefined, command.viewName));
      });
    });
  }

  ngAfterViewInit(): void {
    /**
     * Because the Command use new, all inject inside it will be the will be not in the Context of Components.
     * Use the runInInjectionContext to inject the injector, it can be used to call the inject function.
     * [It should be transference of the code in normally]
     */
    runInInjectionContext(this._injector, () => {
      this._viewCommandRegistry.commandRegister();
      this._keyboardEventRegister();
    });
  }

  /**
   * Destroy will remove all command not permanent
   * Permanent is only temporary in form which used
   */
  ngOnDestroy(): void {
    // TODO: To remove, it needs to be known which component has registered, if not do not removed
    console.log(`[CanCommandDirective in ${this._activeViewName}] Destroyed`);
    const viewCommands: ViewCommandMap = this._viewCommandMediator.getViewCommandsByProperty('isPermanent', false);

    viewCommands.forEach((commands: ViewCommandType[], key: string) => {
      commands.forEach((command) => {
        if (!command.isPermanent && command.viewName === this._activeViewName) {
          command.toRemoveListener && command.toRemoveListener();

          // Remove the command from the map
          this._viewCommandMediator.deleteCommand(key, command.viewName);
        }
      });
    });
  }
}
