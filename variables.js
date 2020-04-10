//'use strict';
//let x = 10;//Global Variable
function func(){
   'use strict';
    let x=20;
    console.log(x);//value of x =20
    if(true){
         let x =100;
         console.log(x);//x =100
    }
}
func();

console.log(x);///20



