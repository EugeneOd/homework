"use strict"
var a = 14; // объявляем переменную a и присваеваем ей значение 14
var b = 3 + (a -= 8); // объявляем переменную b и присваеваем ей значение 3+ (14-8), итого b=9, и у a поменялось значение, теперь она равна 6
var c = ++a; // объявляем переменную c и присваеваем ей значение ++6; c=7
x = b + --c;// вычисляем значение x = 9+ --7; x=9+6; x=15, но так как у нас x не объявлен как переменная(var), и мы используем строгий режим, то получим ошибку 
console.log(x); // выводим console.log и убеждаемся в том, что мы правы..