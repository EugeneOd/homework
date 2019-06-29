"use strict"
var price;
var mass;
var language = prompt('Выберете язык, Choose your language', 'Russian, English');
        if (language == 'Russian') {
        var luggage = prompt('Есть ли у вас багаж?', 'Да, Нет');
            if (luggage == 'Нет') {
            alert( 'Наслаждайтесь поездкой' );
            } else if (luggage == null) { 
            alert( 'Вход отменён' );
            } else if (luggage == 'Да') {
                 mass = prompt( "Взвесьте и введите вес багажа", '0.1 - 15кг, значение через точку');
                if (mass <=5){
                    alert("Оплата за ваш багаж составит " + mass*3 +" ГРН");
                } else if (mass <=10){
                    alert("Оплата за ваш багаж составит " + mass*5 +" ГРН");
                } else if (mass <=15){
                    alert("Оплата за ваш багаж составит " + mass*10 +" ГРН");
                } else if (typeof mass != Number){
                    alert("Введите правильное числовое значение.");
                }
            } else {
            alert( 'Неверное значение' );
        }
    }
         if (language == 'English') {
        luggage = prompt('Do you have luggage?', 'Yes, No');
        if (luggage == 'No') {
            alert( 'Enjoy the trip' );
            } else if (luggage == null) { 
            alert( 'Login canceled' );
        } else if (luggage == 'Yes') {
            mass = prompt( "Weigh and enter baggage weight", '0.1 - 33lb, the value through the point');
           if (mass <=11){
               alert("Payment for your luggage will be " + (mass*3/2.20462)*2.88/100 +" GBR");
           } else if (mass <=22){
               alert("Payment for your luggage will be " + (mass*5/2.20462)*2.88/100 +" GBR");
           } else if (mass <=33){
               alert("Payment for your luggage will be " + (mass*10/2.20462)*2.88/100 +" GBR");
           } else if (typeof mass != Number){
            alert("Enter a valid numeric value.");
        } else {
            alert( 'Invalid value.' );
        }
    }
} else if (language == null) { 
  alert( 'Вход отменён. Login canceled.' );
} 