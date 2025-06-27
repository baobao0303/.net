import { ProductReadableRepository } from '@infrastructure/base';
import { inject, Injectable } from '@angular/core';
import { RequestHandler } from '@application/base';
import { ProductRequest, ProductResponse } from '@application/messages';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductQueryHandler
  implements RequestHandler<ProductRequest, ProductResponse>
{
  private readonly _productRepository = inject(ProductReadableRepository);

  public handle(request: ProductRequest): Observable<ProductResponse> {
    const result = this._productRepository.product(request);

    return result;
  }
}
