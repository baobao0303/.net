import { propertyMapper } from '@core/base';

export class Product {
  @propertyMapper('id', String)
  public id: string = '';
  @propertyMapper('name', String)
  public name: string = '';

  @propertyMapper('description', String)
  public description: string = '';

  @propertyMapper('price', Number)
  public price: number = 0;

  @propertyMapper('pictureUrl', String)
  public pictureUrl: string = '';

  @propertyMapper('productType', String)
  public productType: string = '';

  @propertyMapper('productBrand', String)
  public productBrand: string = '';
}

// 👉 Sau đó mới khai báo ProductResponse
export class ProductResponse {
  @propertyMapper('pageIndex', Number)
  public pageIndex: number = 0;

  @propertyMapper('pageSize', Number)
  public pageSize: number = 0;

  @propertyMapper('count', Number)
  public count: number = 0;

  @propertyMapper('data', Product)
  public data: Product[] = [];
}
