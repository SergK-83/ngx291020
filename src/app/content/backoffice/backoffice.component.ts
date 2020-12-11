import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {

  public myTitle = 'Angular course';
  public drawer!: MatDrawer;

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  public setSidenav(drawer: MatDrawer): void {
    this.drawer = drawer;
  }

}
