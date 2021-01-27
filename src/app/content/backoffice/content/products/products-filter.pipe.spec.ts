import {IProduct, products} from '../../../../data';
import {ProductsFilterPipe} from './products-filter.pipe';

const productsList: IProduct[] = products;

describe('Product pipe', () => {

  let productsFilterPipe: ProductsFilterPipe;

  beforeEach(() => {
    productsFilterPipe = new ProductsFilterPipe();
  });

  it('should work', () => {
    expect(productsFilterPipe.transform(products, ''))
      .toEqual(productsList);
    expect(productsFilterPipe.transform(products, '111'))
      .toEqual([productsList[0]]);
    expect(productsFilterPipe.transform(products, '', true).length)
      .toEqual(4);
  });
});
