import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../data';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input()
  public product: IProduct = {} as IProduct;

  @Input()
  public isOdd!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
