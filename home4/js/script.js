"use strict"

//part1

// function showNumbers(n = prompt('enter the value')){
//   var numSqrt = Math.sqrt(+n);
//    for (var i = 1; i <= 100; i++) {
//     if (numSqrt>i){
//         console.log(i);
//     }
//   }
// }
// showNumbers ();

//part2

// function testPrime(n=prompt("enter the value")){
//     var primeFlag = true;
//  for(var i=2; i < n-1; i++){
//      if (n %i ===0){
//          primeFlag = false;
//      } 
//  }
//  if(primeFlag === true) console.log("n is prime");
//  else console.log("n isn't prime");
// console.log(n);
// }
// testPrime();

//part3

// function arrangementNubmers(num1, num2, num3, checkSymbol){
//     num1 = prompt("Put 1st number");
//     num2 = prompt("Put 2st number");
//     num3 = prompt("Put 3st number");
//     checkSymbol = prompt("Put symbol");
//     var result;

//     if (checkSymbol =="-"){
//         result = Math.min(num1, num2, num3);
//     }
//         else if (checkSymbol =="+"){
//         result = Math.max(num1, num2, num3);
//      }
//     console.log(result)
// }
// arrangementNubmers();

//part4

// function showFruits(){
//    var listOfFruits = "";
//    for(;;){
//        var listItem = prompt("Enter fruits", "null");
//        console.log(listItem);
//        if (listItem == "null"){
//            break;
//        } else listOfFruits = +listItem;
       
//    } 
//    console.log(listOfFruits);
// }
// showFruits();

//part5

// function moneyExchange() {
//         var currentCurse = 27.724;
//         do {
//             var newCurse = prompt("Enter new curse");
// //console.log(newCurse)
//             if (isNaN(newCurse)) {
//                 console.log('enter the number')
//             }
// //console.log('type of new course is - ',typeof (newCurse))
//         }
//         while (typeof(newCurse) == Number);
//         var sum = prompt("enter sum of money");
//         if (isNaN(sum)){
//             console.log('enter the number');
//         }
//         var profit = Math.round((currentCurse - newCurse) * sum);
//         console.log(profit);
    
//     }
//     moneyExchange();


















// function testPrime(n=prompt("Введите число")){
//   if (n===1){
//     return false;
//   }else if(n === 2) {
//     return true;
//   }else{
//     for(var x = 2; x < n; x++) {
//       if(n % x === 0){
//         return false;
//       }
//     }
//     return true;  
//   }
// }
// console.log(testPrime()); //выводим true если число простое, если нет - false


