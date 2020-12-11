import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../products.service';
import {ModalService} from '../../../../../modal/modal.service';
import {ConfirmProductComponent} from '../confirm-product/confirm-product.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  // providers: [
  //   {
  //     provide: ProductsService,
  //     useClass: ProductsService
  //   }
  // ]
})
export class ProductCardComponent implements OnInit {
  @Input()
  public product: IProduct = {} as IProduct;

  @Input()
  public isOdd!: boolean;

  constructor(
    private readonly modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  public addToCart(): void {
    this.modalService.open({
      component: ConfirmProductComponent,
      context: {
        product: {...this.product},
        save: () => {
          this.modalService.close();
        },
        close: () => {
          this.modalService.close();
        },
      }
    });
  }

}
