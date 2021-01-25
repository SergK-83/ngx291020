import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {ActivatedRoute} from '@angular/router';
import {IRootState} from '../../../../store';
import {Store} from '@ngrx/store';
import {getProductsPending} from '../../../../store/actions/products.actions';
import { IProduct } from 'src/app/store/reducers/products.reducer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // public products$: Observable<IProduct[]> = this.productsService.getProducts();
  public products$: Observable<IProduct[]> = this.store.select('products', 'items');
  public searchText: string = '';
  public onlyFavorites = false;

  constructor(
    // private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private store: Store<IRootState>,
  ) {
    console.log(this.activatedRoute.snapshot);
  }

  public ngOnInit(): void {
    this.store.dispatch(getProductsPending());
  }

  public search(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }

  public toggleOnlyFavorites({checked}: MatCheckboxChange): void {
    this.onlyFavorites = checked;
  }

}
