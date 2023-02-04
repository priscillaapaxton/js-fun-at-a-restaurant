
function takeOrder(order, deliveryOrders){
  if (deliveryOrders.length < 3){
 return deliveryOrders.push(order)
  }
}

// function refundOrder(orderNumber, deliveryOrders) {
//   return deliveryOrders.splice(0,1)
// } what is the orderNumber parameter doing if i'm not using it in the 
// function? asking for "remove order by an order number"

function refundOrder(order, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
   if (deliveryOrders[i].orderNumber === order) {
      deliveryOrders.splice([i], 1)
    }
  }
  return deliveryOrders
}

function listItems(deliveryOrders){
  var array = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    array.push(deliveryOrders[i].item);
  }
  return array.join(', ');
}

function searchOrder(deliveryOrders, food) {
  var isOnList = false
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === food) {
      isOnList = true
    }
  }
  return isOnList
}



// function addIngredients(newIngredients, ingredients) {
//   var hasIngredients = false
//   for (var i = 0; i < ingredients.length; i++) {
//    if (newIngredients === ingredients[i]) {
//       hasIngredients = true
//    } 
//   }
//   if (hasIngredients === false) {
//   ingredients.push(newIngredients)
// }
//   return ingredients;
// }







module.exports = {
 

  
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}