import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  private subject = new Subject<any>();
  private routerChange = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.routerChange) {
          this.routerChange = false;
        } else {
          this.clear();
        }
      }
    });
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success(message: string, routerChange = false) {
    this.routerChange = routerChange;
    this.subject.next({type: 'success', text: message});
  }

  error(message: string, routerChange = false) {
    this.routerChange = routerChange;
    this.subject.next({type: 'error', text: message});
  }

  clear() {
    this.subject.next();
  }
}
