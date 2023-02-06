function createRestaurant(name) {
  var restaurant = {
    name : name ,
    menus: {
      breakfast : [],
      lunch : [],
      dinner : [],
    }
  }
  return restaurant;
}


function addMenuItem(pizzaRestaurant, item) {
  var menuTypes = Object.keys(pizzaRestaurant.menus)
  for (var i = 0; i < menuTypes.length; i++) {
    if (menuTypes[i] === item.type) {
      var menuItems = pizzaRestaurant.menus[menuTypes[i]]

      var addItemVibe = "yes bro"
      for (var j = 0; j < menuItems.length; j++) {
        if (item.name === menuItems[j].name) {
          addItemVibe = "nah bro"
        } 
      }
      if (addItemVibe === "yes bro") {
        menuItems.push(item)
      }
    }
  }
}

function removeMenuItem(pizzaRestaurant, itemName, itemType) {
  var menuTypes = Object.keys(pizzaRestaurant.menus)
  for (var i = 0; i < menuTypes.length; i++) {
    if (menuTypes[i] === itemType) {
      var menuItems = pizzaRestaurant.menus[menuTypes[i]]
      for (var j = 0; j < menuItems.length; j++) {
         if (menuItems[j].name === itemName) {
          pizzaRestaurant.menus[menuTypes[i]].splice(j, 1)
          return `No one is eating our ${itemName} - it has been removed from the ${itemType} menu!`
         }
      }
    }
  }

  return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}
