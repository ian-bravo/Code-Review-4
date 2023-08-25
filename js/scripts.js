//Business Logic ~~~~~~~~~~
function Pizza(pizzaToppings, pizzaSize) {
  this.toppings = pizzaToppings;
  this.size = pizzaSize;
}

Pizza.prototype.costForToppings = function () {
  this.toppings.length * 4;
  console.log(this.toppings.length * 4);
};

Pizza.prototype.costForSize = function () {
  switch (this.size) {
    case ("large"):
      console.log("large cost +5");
      break;
    case ("medium"):
      console.log("medium cost +4");
      break;
    case ("small"):
      console.log("small cost +3"); 
      break;
  }
}