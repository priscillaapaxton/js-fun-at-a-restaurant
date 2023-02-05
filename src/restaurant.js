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
function removeMenuItem(pizzaRestaurant, item) {
  // var menuItems = Object.values(pizzaRestaurant.menus)
  // for (var i = 0; i < menuTypes.length; i++) {
  //   if (item.name = )
  // }
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}
