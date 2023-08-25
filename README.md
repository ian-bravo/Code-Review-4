```
Describe: Pizza()

Test 1: It should return a Pizza object with two properties for toppings and size.
Code: const orderPizza = new Pizza(["cheese", "pepperoni"], "large");
Expected Output: Pizza { toppings: ["cheese", "pepperoni"], size: "large" }

Describe: Pizza.prototype.cost = function ()

Test 1: It should return a method for calculating the cost of a pizza with additional toppings.
Code: orderPizza.cost();
Expected Output: a number that reflects the price of additional toppings, i.e. 15 (dollars).
```