"use strict"

var obj1 = {
    a: 3,
    b: 4,
    c: {
       a: {
          a: 38,
          b: 21
       },
       b: 6
    }
 };
 
 
 var obj2 = {
    a: 3,
    b: 58,
    d: 32,
    c: {
       a: {
          a: 2,
          b: 1
       }
    }
 };

 var result = {}
 function mergeObj (){
     for(var key in obj1) {
         if(typeof obj1[key] === "object" && obj1[key] !== null){
             var currentObj = obj1[key];
             result[key] = {};

             for(var subKey in currentObj){
                 result[key][subKey] = currentObj[subKey];
             }
         } else {
             result[key] = obj1[key]
         }
     }
     
     for(var key in obj2) {
        if(typeof obj2[key] === "object" && obj2[key] !== null){
            var currentObj = obj2[key];

            for(var subKey in currentObj){
                result[key][subKey] = currentObj[subKey];
            }
        } else {
            result[key] = obj2[key]
        }
    }
    console.log(result);
 }

 mergeObj()