import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private sidenavState = new BehaviorSubject<boolean>(false)
  sidenavState$ = this.sidenavState.asObservable()

  toggleSidenav() {
    this.sidenavState.next(!this.sidenavState.getValue())
    console.log(this.sidenavState.getValue());
  }
}
