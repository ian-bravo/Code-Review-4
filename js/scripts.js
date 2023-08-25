//Business Logic ~~~~~~~~~~
function Pizza(pizzaToppings, pizzaSize) {
  this.toppings = pizzaToppings;
  this.size = pizzaSize;
}

Pizza.prototype.costForToppings = function () {
  let toppingCost = this.toppings.length * 4;
  return toppingCost;
};

Pizza.prototype.costForSize = function () {
  switch (this.size) {
    case ("large"):
      return 5;
      break;
    case ("medium"):
      return 4;
      break;
    case ("small"):
      return 3; 
      break;
  }
}

Pizza.prototype.totalCost = function () {
  let totalCost = (this.costForSize() + this.costForToppings());
  return totalCost;
}