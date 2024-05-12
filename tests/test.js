
let allIngredients = [
  {"quantity" : 1}, 
  {"quantity" : 2}, 
  {"quantity" : 3}, 
]


function getBaseQuantity(index){
  return allIngredients[index].quantity
}


let myOriginalQuantity = getBaseQuantity(2)



console.log(myOriginalQuantity);