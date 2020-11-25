import {
  Component, ContentChild, EventEmitter,
  OnInit, Output, TemplateRef, ViewChild, ViewContainerRef
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild('drawer', {static: true})
  public drawer!: MatDrawer;

  @ViewChild('container', {static: true, read: ViewContainerRef})
  public container!: ViewContainerRef;

  @ContentChild('contentTpl', {static: true})
  public contentTpl!: TemplateRef<any>;

  @Output()
  public setSidenavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  ngOnInit(): void {

    this.container.createEmbeddedView(this.contentTpl);
    console.log(this.container);
    this.setSidenavControl.emit(this.drawer);
  }

}
