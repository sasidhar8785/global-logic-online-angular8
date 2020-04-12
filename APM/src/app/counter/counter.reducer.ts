import { createFeatureSelector, createSelector } from "@ngrx/store";

const initialState = {
    counter: 100,
    countries:[],
    loading:false,
    error:''
}
const getCountriesFeatureState = createFeatureSelector<any>('counter');
export const getCountries = createSelector(
    getCountriesFeatureState,
    state => state
  );
export const Counter = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            let count = state.counter+1;

            return { ...state, counter: count};
        case 'DECREMENT':
            if (state.counter > 0) {
                let count = state.counter-1;

                return { ...state, counter: count }
            }
            else {
                return { ...state }
            }
        case 'LOAD_COUNTRIES_BEGIN':
            return {...state,loading:true}
        case 'LOAD_COUNTREIS_SUCCESS':{
            return {...state,loading:false,countries:action.payload,error:''}
        }
        case 'LOAD_COUNTREIS_FAILURE':{
            return  {...state,loading:false,countries:[],error:"Error in loading the countries"}
        }
        default:
            return { ...state }
    }
}