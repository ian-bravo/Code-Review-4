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
      return 9;
      break;
    case ("medium"):
      return 7;
      break;
    case ("small"):
      return 5; 
      break;
  }
}

Pizza.prototype.totalCost = function () {
  let totalCost = (this.costForSize() + this.costForToppings());
  return totalCost;
}

// User Interface Logic ~~~~~~~~~~~~~~~~~~
function handleFormSubmission(event) {
  event.preventDefault();
  const toppingChoices = [];
  document.querySelectorAll('[type="checkbox"]').forEach(function(choice) {
    if (choice.checked === true) {
      toppingChoices.push(choice.value);
    }
  });
  const sizeChoice = document.querySelector("input[name='size']:checked").value;
  let orderPizza = new Pizza(toppingChoices, sizeChoice);
  const displayTotal = orderPizza.totalCost(); 
  document.querySelector("span#display-total").innerText = displayTotal;
}

window.addEventListener("load", function () {
  document.querySelector("form#order-form").addEventListener("submit", handleFormSubmission);
});

