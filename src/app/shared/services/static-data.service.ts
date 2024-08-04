import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {
  constructor() {}

  private data$ = new BehaviorSubject<any>({});
  selectedItem$ = this.data$.asObservable();

  // Set data form item component once user submit the form
  setData(body: any) {
    this.data$.next(body);
  }
}
