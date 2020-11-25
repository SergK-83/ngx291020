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

  public ngOnInit(): void {
  }

  public toggleSidenav(): void {
    this.drawer.toggle();
  }
}
