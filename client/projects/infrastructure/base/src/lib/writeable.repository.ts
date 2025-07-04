import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject } from '@angular/core';
import { IWriteableRepository } from '@core/base';
import { Observable } from 'rxjs';
import { AppContext } from './app.context';

export class WriteableRepository implements IWriteableRepository {
  protected _context = inject(AppContext);
  protected httpClient = inject(HttpClient);
  protected destroyRef = inject(DestroyRef);

  protected readonly defaultOptions = {
    headers: {
      'Time-Zone': Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
  };

  private mergeOptions(customOptions?: {}): {} {
    return { ...this.defaultOptions, ...customOptions };
  }

  public delete<T>(endPoint: string, options?: {}): Observable<T> {
    return this.httpClient.delete<T>(endPoint, this.mergeOptions(options));
  }

  public add<T>(endPoint: string, body: T, options?: {}): Observable<T> {
    return this.httpClient.post<T>(endPoint, body, this.mergeOptions(options));
  }

  public update<T>(endPoint: string, body: T, options?: {}): Observable<T> {
    return this.httpClient.put<T>(endPoint, body, this.mergeOptions(options));
  }
}
