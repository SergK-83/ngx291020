import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(
    // private router: Router,
  ) {}

  public ngOnInit(): void {
    // this.router.events
    //   .pipe(
    //     // filter((event) => event instanceof NavigationStart && event.id === 1 ) // только на event NavigationStart  и только при refresh (event.id === 1)
    //   )
    //   .subscribe((event) => { console.log(event); });
  }
}
