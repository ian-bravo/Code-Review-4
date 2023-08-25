```
Describe: Pizza()

Test 1: It should return a Pizza object with two properties for toppings and size.
Code: const orderPizza = new Pizza(["cheese", "pepperoni"], "large");
Expected Output: Pizza { toppings: ["cheese", "pepperoni"], size: "large" }

Describe: Pizza.prototype.costForToppings = function ()

Test 1: It should return a method for calculating the cost of toppings.
Code: orderPizza.costForToppings();
Expected Output: a number that reflects the cost of toppings.

Describe: Pizza.prototype.costForSize = function ()

Test 1: It should return a method for calculating the cost of the pizza's size.
Code: orderPizza.costForSize();
Expected Output: a number that reflects the cost of the pizza's size.

Describe: Pizza.prototype.totalCost = function ()

Test 1: It should return a method for calculating the total cost of the pizza.
Code: orderPizza.totalCost();
Expected Output: a number that takes both outputs of the two methods (costForToppings and costForSize) and adds them together for a final cost.
```