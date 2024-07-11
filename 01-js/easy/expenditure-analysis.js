/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  let expenditure = [];
  let categories = new Set();

  for (let i = 0; i < transactions.length; i++) {
    let categoryType = transactions[i].category;

    if (!categories.has(categoryType)) {

      let categoryMap = {};
      let totalSpent = transactions[i].price;
      categories.add(categoryType);
      categoryMap["category"] = categoryType;
      categoryMap["totalSpent"] = totalSpent;

      for (let j = i + 1; j < transactions.length; j++) {
        if (transactions[j].category == categoryType) {
          totalSpent = totalSpent + transactions[j].price;
          categoryMap["totalSpent"] = totalSpent;
        }
      }

      expenditure.push(categoryMap);
    }
  }
  return expenditure;
}

let transactions = [{
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza',
}, {
  id: 2,
  timestamp: 1656076800000,
  price: 10,
  category: 'Fruit',
  itemName: 'Apple',
}, {
  id: 3,
  timestamp: 1656076800000,
  price: 30,
  category: 'Food',
  itemName: 'Pasta',
}, {
  id: 4,
  timestamp: 1656076800000,
  price: 90,
  category: 'Fruit',
  itemName: 'Pasta',
}, {
  id: 5,
  timestamp: 1656076800000,
  price: 50,
  category: 'Fruit',
  itemName: 'Pasta',
}, {
  id: 6,
  timestamp: 1656076800000,
  price: 15,
  category: 'Fish',
  itemName: 'Prawn',
}, {
  id: 6,
  timestamp: 1656076800000,
  price: 35,
  category: 'Fish',
  itemName: 'Prawn',
}, {
  id: 3,
  timestamp: 1656076800000,
  price: 30,
  category: 'Food',
  itemName: 'Pasta',
}];

// console.log(calculateTotalSpentByCategory(transactions));


module.exports = calculateTotalSpentByCategory;
