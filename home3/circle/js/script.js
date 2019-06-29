"use strict"

var leg1 = prompt('Выберете координаты точки по оси X', 'Числовое значение');
var num1 = + leg1;
if (num1 > 5) {
    console.log("Заданная точка  1 не будет входить в заштрихованную точку");
} else if (num1 < 0) {
    console.log("Заданная точка 1 не будет входить в заштрихованную точку");
} else if (isNaN(num1)) {
    alert("Введите числовое значение")
} else if (0 < num1 < 5) {
    var leg2 = prompt('Выберете координаты точки по оси Y', 'Числовое значение');
    var num2 = + leg2;
    if (num2 > 5) {
        console.log("Заданная точка не будет входить в заштрихованную точку");
    } else if (num2 < 0) {
        console.log("Заданная точка не будет входить в заштрихованную точку");
    } else if (isNaN(num2)) {
        console.log("Введите числовое значение")
    } if (0 < num2 < 5){
        var hypotenuse = Math.sqrt(num1 * num1 + num2 * num2);
        if (hypotenuse < 5) {
            console.log("Заданная точка 2 не входит в заштрихованную область");
        } else if (hypotenuse > 7.0710678118654755) {
            console.log("Заданная точка 2 не входит в заштрихованную область");
        } else {
            console.log("Заданная точка входит в заштрихованую область " + hypotenuse);
        }
    }
    
}
