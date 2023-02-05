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
      pizzaRestaurant.menus[menuTypes[i]].push(item) 
    }
  }
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}
