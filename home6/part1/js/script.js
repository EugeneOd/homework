"use strict"

function home1() {
    var inputNumbers = prompt('Enter the numbers separated by commas (amount of numbers from 3 to 10)');
    var numbers = inputNumbers.split(',');
    
    if (numbers.length < 3 || numbers.length > 10) {
      alert('Wrong amount of numbers');
      return;
    }
    
    for (var i = 0; i < numbers.length; i++) {
      var item = numbers[i];
      var num = parseInt(item);
      
      if (isNaN(num) || num > 100) {
          alert('This should be NUMBER less than a hundred.');
        return;
      } 
      numbers[i] = num;
    }
    numbers.sort((a,b) => a - b); 
    console.log(numbers.join(', '));
  }

  home1();