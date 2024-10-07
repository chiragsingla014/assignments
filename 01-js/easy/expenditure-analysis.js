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
  let list = [];

    for(transaction of transactions){
      if(list.length == 0){
        list.push({category: transaction.category , totalSpent: Number(transaction.price)})
      }
      else{
        let counter = 0;
        for(i=0;i<list.length; i++){
          if(transaction.category == list[i].category){
            list[i].totalSpent = list[i].totalSpent + Number(transaction.price);
            counter = 1;
            break;
          }
        }
        if(counter == 0){
          list.push({category: transaction.category , totalSpent: Number(transaction.price)})
        }
      }

      
    }

  return list;
}


module.exports = calculateTotalSpentByCategory;