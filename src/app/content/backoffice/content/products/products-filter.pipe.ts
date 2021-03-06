import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from '../../../../store/reducers/products.reducer';

@Pipe({
  name: 'productsFilter',
  pure: false
})
export class ProductsFilterPipe implements PipeTransform {

  public transform(products: IProduct[], text: string, isFavorite: boolean = false): IProduct[] {
    let result: IProduct[] = products;

    if (isFavorite) {
      result = result.filter((product: IProduct) => product.isFavorite);
    }

    if (!text ) {
      return result;
    }

    return result.filter( (product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(text.toLowerCase());
    });
  }
}
