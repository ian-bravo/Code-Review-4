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
    const toppingChoices = document.querySelector("input[name='toppings']:checked").value;

//NEED TO FIND HOW TO GET CHECKBOX VALUES - watch youtube

  // let toppingChoices = document.getElementsByName('toppings').forEach(function(checked){
  //   checked.addEventListener('click', function () {
  //     if(this.checked){
  //       // return this.value;
  //       console.log(this.value);
  //     }
  //   });
  // });

  // let checkedToppings = document.querySelectorAll('.toppings')
  //   checkedToppings.forEach((checkbox))
  console.log(toppingChoices);
  const sizeChoice = document.querySelector("input[name='size']:checked").value;
  console.log(sizeChoice);
  let orderPizza = new Pizza(toppingChoices, sizeChoice);
  
  const displayTotal = orderPizza.totalCost(); 
  console.log(displayTotal);
  document.querySelector("span#display-total").innerText = displayTotal;
  
}


window.addEventListener("load", function () {
  document.querySelector("form#order-form").addEventListener("submit", handleFormSubmission)
});