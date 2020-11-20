import {
  Component, EventEmitter, Input,
  OnInit, Output,
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
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

  @Input()
  public size!: number;

  @Output()
  public sizeChange = new EventEmitter();

  public ngOnInit(): void {
  }

  public inc(): void {
    this.sizeChange.emit(this.size + 1);
  }

  public toggleSidenav(): void {
    this.drawer.toggle();
  }
}
