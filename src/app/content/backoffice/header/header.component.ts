import {
  Component, Input,
  OnInit,
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {IRootState} from '../../../store';
import {Store} from '@ngrx/store';
import {totalProducts} from '../../../store/reducers/cart.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  @Input()
  public set myTitle(value: string) {
    if (!value) {
      return;
    }
    this.title = value;
  }

  public title!: string;

  @Input()
  public drawer!: MatDrawer;

  public cartProductsCount$ = this.store.select(totalProducts);

  constructor(
    // private cdr: ChangeDetectorRef,
    // private ngZone: NgZone
    private store: Store<IRootState>
  ) {
  }

  public ngOnInit(): void {
    // при работе со сторонним api можно вывалиться из zone,
    // вернуться можно следующим образом
    // vk.getUser((user) => {
    //   console.log(user); // здесь юзера будет видно
    //   this.user = user;  // но юзер недоступен, мы выпали из zonejs
    //   this.ngZone.run(() => { // здесь юзер становится доступным
    //     this.user = user;
    //   });
    //
    //   this.ngZone.runOutsideAngular(() => {
    //     // some calc
    //   });
    // });
  }

  public toggleSidenav(): void {
    this.drawer.toggle();
  }
}
