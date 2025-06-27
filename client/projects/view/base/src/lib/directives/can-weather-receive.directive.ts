import { Directive, inject, OnDestroy, OnInit } from '@angular/core';
import { VIEW_CONTEXT } from '../view.aggregation.context';

/**
 * Defines the Command Directive to register the new command automatically.
 * Only use for which component has signal
 */
@Directive({
  selector: '[can-weather-receive]',
  standalone: true,
})
export class CanWeatherReceiveDirective implements OnInit, OnDestroy {
  private _context = inject(VIEW_CONTEXT);
  // private _notificationHub = inject(NotificationSignalRHub);

  ngOnInit(): void {
    // this._notificationHub.on('ReceiveNotification', this.weatherReceiveInformation);
  }

  /**
   * Recieved the weather information from SignalR server
   * @param message the message (text) in JSON, it need to be converted
   */
  public weatherReceiveInformation = (message: string) => {
    const weather = JSON.parse(message);
    this._context.setActiveItem(weather);
  };

  ngOnDestroy(): void {
    // this._notificationHub.off('ReceiveNotification', this.weatherReceiveInformation);
  }
}
