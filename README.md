# _Pizza Parlor Order Form - Code-Review-4_

#### By _**Ian Bravo**_

#### _This website is a mock online order form for a Pizza Parlor._

## GitHub Page ##

https://ian-bravo.github.io/Code-Review-4/


## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_


## Description

This webpage will allow the User to select various options when ordering a pizza online. The User shall select a size and whatever toppings they desire. The price is calculated and displayed at the end of the form. 

## Setup/Installation Requirements

1. Open Terminal.
2. Change your directory to where you would want the cloned directory.
3. Input the following command into your terminal:  
 _git clone https://github.com/ian-bravo/Code-Review-4_
4. Navigate to the top level of this newly cloned directory.
5. Open index.html in your browser to view the webpage. 


## Known Bugs

* _No known bugs_


## License

MIT License  

Copyright (c) 25-Aug-2023 Ian Bravo  

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



_For questions or concerns, please email me at bravo.ian@gmail.com_


## Tests - Business Logic

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