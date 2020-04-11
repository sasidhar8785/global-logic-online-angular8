import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
    name:'formatphone'
})
export class PhonePipe implements PipeTransform{
    //user inputs the phone number
    transform(input:String,criteria:String) {
     if(!input||input.length!=10)  {
         return input;
     }
     else{
         if(criteria=='IN'){
             return input.substring(0,5)+"-"+input.substring(5,10);
         }
         if(criteria=='US'){
             return input.substring(0,3)+"-"+input.substring(3,6)+"-"+input.substring(6,10);
         }
     }

    }
    constructor(){

    }

}