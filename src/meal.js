function nameMenuItem(name) {
  return `Delicious ${name}`
};


function createMenuItem(name, price, type) {
  var menuItem = {
    name : name,
    price : price,
    type : type
  }
  return menuItem
}


function addIngredients(newIngredients, ingredients) {
  var hasIngredients = false
  for (var i = 0; i < ingredients.length; i++) {
    if (newIngredients === ingredients[i]) {
      hasIngredients = true
    } 
  }
  if (hasIngredients === false) {
    ingredients.push(newIngredients)
  }
  return ingredients;
}


function formatPrice(initialPrice) {
  newPrice = `$${initialPrice}`
  return newPrice;
}

function decreasePrice(newPrice) {
 var decreasedPrice = newPrice * .9 
  return decreasedPrice;
}

function createRecipe(title, ingredients, type) {
  var recipe = {
    title : title,
    ingredients : ingredients,
    type : type
  }
  return recipe 
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


