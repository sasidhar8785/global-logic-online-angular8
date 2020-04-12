import { Action } from "@ngrx/store";

export class Load implements Action {
    readonly type = 'LOAD_COUNTRIES_BEGIN';
    constructor(){}
}
export class LoadSuccess implements Action {
    readonly type = 'LOAD_COUNTREIS_SUCCESS';
    
    constructor(public payload: any) { }
}
export class LoadFailure implements Action {
    readonly type = 'LOAD_COUNTREIS_FAILURE';
}