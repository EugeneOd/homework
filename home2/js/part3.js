"use strict"
var a = 5; // объявляем переменную a и присваеваем ей значение 5
//alert ('2' - 34); // выводим в alert "-32", так как оператор "-" используется только для математических вычислений, и строка "2" приведётся к числу 2
//alert (null + '3' + undefined); // выводим в alert "null3undefined", так как бинарный оператор применяется к строке, производится их конкатенация
//alert (a *= '3'); // выводим в alert "15", так как ранее a была объявлена, мы рассмытриваем выражение a = a * '3', знак умножения работает только с математическими вычислениями, и соответственно мы имеем a=5*3
//alert ( 3 / (a-=5)); // выводим в alert "0,3" так как а у нас в памяти перезаписалась и теперь она равна 15, то рассматриваем выражение 3/(a= a-5), имеем 3/10
//alert ( a + '' - 33); // выводим в alert "-23" так как а у нас в памяти перезаписалась и теперь она равна 10, то рассматриваем выражение 10+"" -33, ("" - пустая строка, при конкатенации ничего не добавляется), имеем 10-33
