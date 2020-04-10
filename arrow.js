// // this.name = "John";
// // let me = {
// //     name: "Kiran Paturi",
// //     thisInArrow: () => {
// //         console.log("My name is " + this.name); // no 'this' binding here 
// //     },
// //     thisInRegularFn() {
// //         console.log("My name is " + this.name); // 'this' binding works here 
// //     }
// // };
// // me.thisInArrow();
// // me.thisInRegularfn();

// this.name = "Sinha";
// function parent() {
//     this.name = "Ravi";
//     var that = this;
//    return abc=()=> {
//         this.name = "kirann";
//         console.log(this.name);
//         console.log(that.name);
//     }
// }

// let x =  parent();
// x();

let x =[1,2,3];
let y =x.map(function(item,index){
    return {num:item};
})
console.log(y);
///-----------------------------------------
Array.prototype.map = function(item,index){
   return item;
};

x.even(function(item,index){
    if((item%2)==0){
        return item;
    }
});


//

let x = (item)=>item%2;

let nums = [1,3,4,5,6,7934,9586];
let result = nums.filter(x=>x%2==0);

let mapped = nums.map(x=>x*2);