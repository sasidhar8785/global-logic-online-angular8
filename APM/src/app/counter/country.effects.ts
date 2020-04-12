import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { CountryService } from './country.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadSuccess } from './country.action';

@Injectable()
export class CountryEffect {
    constructor(private countrySvc: CountryService,
        private actions$: Actions) {

    }
    @Effect()
    loadCountries$:Observable<Action>=this.actions$.pipe(
        ofType('LOAD_COUNTRIES_BEGIN'),
        mergeMap(action =>
          this.countrySvc.getCountries().pipe(
            map(countries => (new LoadSuccess(countries)))
            //catchError(err => {return {type:'LOAD_COUNTREIS_FAILURE'}})
          )
        )
      );
}