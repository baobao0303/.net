import { ProductRequest, ProductResponse } from '@application/messages';
import { IReadableRepository } from '@core/base';
import { Observable } from 'rxjs';

export interface IProductReadableRepository extends IReadableRepository {
  product(request: ProductRequest): Observable<ProductResponse>;
}
