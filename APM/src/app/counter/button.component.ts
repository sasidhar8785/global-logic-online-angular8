import {Component} from'@angular/core';
import { Store } from '@ngrx/store';
@Component({
    selector:"app-counter-button",
    template:`<button class="btn btn-primary" (click)="add()">Increment</button>
    <br><br>
    <button class="btn btn-primary" (click)="sub()">Decrement</button>`
})
export class ButtonComponent{
    
    constructor(private store:Store<any>){

    }
    add(){
        this.store.dispatch({type:'INCREMENT'});
    }
    sub(){
        this.store.dispatch({type:'DECREMENT'});
    }

}