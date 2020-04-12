import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
@Component({
    selector: "app-dropdown",
    template: `<label>{{isLoading}}</label>
    <div class="row">
    <select class="form-control col-md-4" [(ngModel)]="selectedCountry">
        <option *ngFor="let c of countries" [value]="c.alpha2Code">{{c.name}}</option>
    </select>
    </div>`
})

export class DropdownComponent {
    countries = [];
    isLoading = false;
    error = "";
    constructor(private store: Store<any>) {
        this.getCountries();
        this.countries$ = this.store.pipe(select(fromCounter.getCountries)) as Observable<any>;
    }
    countries$:any
    getCountries() {
        this.store.pipe(select('counter')).subscribe(
            counter => {
                if (counter) {
                    this.countries = counter.countries;
                    this.isLoading = counter.loading;
                    this.error = counter.error;
                }
            });
    }
}