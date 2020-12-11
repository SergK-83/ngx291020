import {
  Component, Input,
  OnInit,
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

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

  constructor(
    // private cdr: ChangeDetectorRef,
    // private ngZone: NgZone
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
