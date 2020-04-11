import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    constructor(private http:HttpClient) {

    }
    commonGet(url){
        return this.http.get(url);
    }
    commonPost(url,payLoad){
        return this.http.post(url,payLoad);
    }
}