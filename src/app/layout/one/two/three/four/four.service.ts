import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FourService {

  public foo: Subject<number> = new Subject<number>();
  public behaviourFoo: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public fooAsObs: Observable<number> = this.foo.asObservable();
  public behaviourFooAsObs: Observable<number> = this.behaviourFoo.asObservable();

  constructor() { }

  public setFoo(n: number): void {
    this.foo.next(n);
  }

  public setBehaviourFoo(n: number): void {
    this.behaviourFoo.next(n);
  }
}
