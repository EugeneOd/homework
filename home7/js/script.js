"use strict"
var itemList = [
    {
        name: 'pen',
        price: 7,
        category: 'pens'
    },
    {
        name: 'penPro',
        price: 25,
        category: 'pens'
    },
    {
        name: 'penExtra',
        price: 999,
        category: 'pens'
    },
    {
        name: 'black_marker',
        price: 15,
        category: 'markers'
    },
    {
        name: 'permanent_marker',
        price: 35,
        category: 'markers'
    },
    {
        name: 'green_marker',
        price: 20,
        category: 'markers'
    },
    {
        name: '10sm',
        price: 10,
        category: 'rulers'
    },
    {
        name: '25sm',
        price: 30,
        category: 'rulers'
    },
    {
        name: '50sm',
        price: 100,
        category: 'rulers'
    }
];



// Функция для добавления элемента в массив

function addItem() {
    var nameAdd, priceAdd, categoryAdd;
    nameAdd = prompt('Enter the name of product');
    priceAdd = +prompt('Enter the price of product');
    categoryAdd = prompt('Enter the category of product');

    var obj = {
        name: nameAdd,
        price: priceAdd,
        category: categoryAdd
    }

    itemList.push(obj)
}

// addItem()




//Фильтр товаров по цене



function priceLimit(arr) {
    var filteredList = [];
    var minPrice, maxPrice;

    minPrice = prompt('Enter minimum price of the product');
    maxPrice = prompt('Enter maximum price of the product');
    arr.forEach(function (item, index, array) {
        if (item.price >= minPrice && item.price <= maxPrice) {
            filteredList.push(item)
        }
    })

    return filteredList;
}

 //priceLimit(itemList)
 



//фильтр товаров по категории




function categoryFiltering(arr) {
    var filteredListByCategory = [];
    var category;

    category = prompt('Enter needed category');
    arr.forEach(function (item, index, array) {
        if (category == item.category) {
            filteredListByCategory.push(item)
        }
    })
    return  filteredListByCategory;
}

// categoryFiltering(itemList)




//Подсчёт количества товаров в категории


function countItemsInCategory() {
    var result = 0;
    var selectedCategory = prompt('Choose a category of products');
    itemList.forEach(function (item, index, array) {
        if (selectedCategory == item.category) {
            result++;
            return result;
        }
    })
}
//  countItemsInCategory()





//Удаление товара по его имени


function deleteItem() {
    var selectedItem;

    selectedItem = prompt('Enter needed product, which one you want to delete. ');
    itemList.forEach(function (item, index, array) {
        if (selectedItem == item.name) {
            itemList.splice(index, 1)
        }
    })

}
// deleteItem()



//Сортировка от меньшего к большему и наоборот




function sortArrayByPrice(list, isAsc = true, column = "price") {
    var sortedByPriceArray = {};
    sortedByPriceArray = list.slice(0) //клонируем массив
    return sortedByPriceArray.sort(function (a, b) {
        return isAsc ? a[column] - b[column] : b[column] - a[column];
    });
}

//console.log(sortArrayByPrice(itemList));   //сортируем цену по возрастанию
// console.log(sortArrayByPrice(itemList, false));  //сортируем цену по убыванию
//sortArrayByPrice(itemList)


//Принимаем вид сортировки(от меньшего к большему и наоборот) и фильтры (диапазон цен и категорию), возвращаем новый массив


function totalFucking(arr) {
    var fullySortedList = [];
    fullySortedList = arr.slice(0) //опять же клонируем массив
     fullySortedList = sortArrayByPrice(fullySortedList);
     fullySortedList = categoryFiltering(fullySortedList);
     fullySortedList = priceLimit(fullySortedList);
    console.log(fullySortedList)
}


// totalFucking(itemList)


function totalSum(arr, chosenFilter){
    var sumArray = [];
    var sum = 0;
    var yourChoise = prompt('Enter type of sort', "category or price");
    if (yourChoise == "category"){
        sumArray = categoryFiltering(arr);
    };
    if (yourChoise == "price"){
        sumArray = priceLimit(arr);
    };

    sumArray.forEach(function(item, index, array){
        sum += item.price;
    })
   
    console.log(sum)
    
}

//totalSum(itemList)