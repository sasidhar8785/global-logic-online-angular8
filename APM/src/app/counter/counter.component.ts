import {Component} from'@angular/core';
import { Store, select } from '@ngrx/store';
@Component({
    selector:"app-counter-label",
    template:`<label>{{count}}</label>`
})
export class CounterComponent{
    constructor(private store:Store<any>){
        this.getCount();
    }

    getCount(){
        this.store.pipe(select('counter')).subscribe(
            counter => {
              if (counter) {
                this.count = counter.counter;
              }
            });
    }
    count=0;
  
}