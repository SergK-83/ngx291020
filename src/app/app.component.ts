import {Component, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {IProduct, products$} from './data';
import {Observable} from 'rxjs';
import {MatCheckboxChange} from '@angular/material/checkbox';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public myTitle = 'Angular course';
  public drawer!: MatDrawer;
  public products$: Observable<IProduct[]> = products$;
  public searchText: string = '';
  public onlyFavorites = false;

  constructor(
    // private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    // this.products$ = products$;
    // this.cdr.detectChanges();

    // this.products$
    //   .subscribe((products) => {
    //     this.products = products;
    //   });
  }

  public setSidenav(drawer: MatDrawer): void {
    this.drawer = drawer;
  }

  public search(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }

  public filteredProducts(products: IProduct[], text: string): IProduct[] {
    if (!text) {
      return products;
    }

    return products.filter( (product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(text.toLowerCase());
    });
  }

  public toggleOnlyFavorites({checked}: MatCheckboxChange): void {
    this.onlyFavorites = checked;
  }
}

