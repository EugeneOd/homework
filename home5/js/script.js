"use strict"

//реализация циклом

// function showEven(n=prompt("enter the value")) { 
//     if (n<0){
//         console.log("n must be greater than zero ");
//     } else if (isNaN(n)){
//         console.log("n must be a numeric value");
//     }
//     for (var i = 0; i <= n; i++) {
//         if(i%2==0){
//             console.log(i);
//         }
//     }
// }

// showEven();

//реализация рекурсией

// var n=prompt("enter the value");
// function showEven(n) { 
//     if (n<0){
//         console.log("n must be greater than zero ");
//     } else if (isNaN(n)){
//         console.log("n must be a numeric value");
//     }
//     if (0 == n){
//         console.log(n);
//         return
//     } else if (n %2 == 0) {
//         console.log((n));
//         showEven(--n);
//     } else if (n %2 == 1) {
//         showEven(--n);
//     }     
// }
// showEven(n);



//part2.1

function cons(){
    console.log('c is a function')
}

function f(a, b, c) {
    {
        if (a === undefined) {
            a = 2;
        }
        if (b === undefined) {
            b = 3;
        }
        function sum(a, b){
            return a + b;
        }

         if (typeof(c) =="function") {
            return c();
        } else {
            return sum(a,b)
        }


    }
}
console.log(f(2,3,cons));
