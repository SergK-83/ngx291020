import {Component} from '@angular/core';
import {IProduct} from '../products.service';

@Component({
  selector: 'app-confirm-product',
  templateUrl: './confirm-product.component.html',
  styleUrls: ['./confirm-product.component.css']
})
export class ConfirmProductComponent {

  public product!: IProduct;

  public save = () => {};
  public close = () => {};

  constructor() { }

}
