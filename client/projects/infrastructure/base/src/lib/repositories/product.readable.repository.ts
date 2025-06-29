import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestMapper, ResponseMapper } from '@core/base';
import { catchError, map, Observable, of } from 'rxjs';
import { ReadableRepository } from '../readable.repository';
import { ProductRequest, ProductResponse } from '@application/messages';
import { IProductReadableRepository } from '@core/domain';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class ProductReadableRepository
  extends ReadableRepository
  implements IProductReadableRepository
{
  public product(request: ProductRequest): Observable<ProductResponse> {
    const endPoint = `${this._context.endPoint}/Products`;

    return this.findAll(endPoint).pipe(
      takeUntilDestroyed(this.destroyRef),
      map((res: any) => {
        return new ResponseMapper(ProductResponse).map(res);
      })
    );
  }
}
