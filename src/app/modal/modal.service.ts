import {Injectable, Type} from '@angular/core';
import {Observable, Subject} from 'rxjs';

export interface IModalData {
  component: Type<any>;
  context: any;
}

@Injectable()
export class ModalService {

  private modalSequence: Subject<IModalData> = new Subject();

  constructor() { }

  public open(componentObj: IModalData): void {
    this.modalSequence.next(componentObj);
  }

  public get modalSequence$(): Observable<any> {
    return this.modalSequence.asObservable();
  }
}
