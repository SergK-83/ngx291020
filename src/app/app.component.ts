import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {Observable} from 'rxjs';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {IProduct, ProductsService} from './content/backoffice/content/products/products.service';
import {NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public myTitle = 'Angular course';
  public drawer!: MatDrawer;
  public products$: Observable<IProduct[]> = this.productsService.getProducts();
  public searchText: string = '';
  public onlyFavorites = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private productsService: ProductsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart && event.id === 1 ) // только на event NavigationStart  и только при refresh (event.id === 1)
      )
      .subscribe((event) => { console.log(event); });

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

