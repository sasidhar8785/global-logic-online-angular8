import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CountryService {
    constructor(private httpSvc:HttpClient){

    }
    getCountries(){
        return this.httpSvc.get("https://restcountries.eu/rest/v2/all");
    }
}