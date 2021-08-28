const { Product } = require("../js/Product");

class Cart {
  constructor() {
    //attribute items
    this.items = [];
  }

  /* 
  The constructor has no parameters. It always sets an items property to an empty array.
   **This array will later have Products added to it.
 
   This takes a product parameter (of type Product) and adds it to the items array.
    --Function parameters are the names listed in the function's definition.
    --Function arguments are the real values passed to the function.
    */
  add(product) {
    this.items.push(product);
    {
      return product;
    }
  }

  getItemCount() {
    return this.items.length;
  }
  /* getTotalBeforeTax() - This has no parameters and returns the sum of the
price of all Products in the items array. */

  getTotalBeforeTax() {
    //const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);
    /*  const totalPrice = this.items.reduce(
      (acc, product) => acc + product.price,
      0
    ); */
    let price = 0;
    for (let item of this.items) {
      price += item.price;
    }
    return price;
  }

  /* 
  getTotalWithTax() - This has no parameters and returns the sum of the 
  getPriceWithTax() method of all Products in the items array.*/

  getTotalWithTax() {
    let total = 0;
    for (let item of this.items) {
      total += item.getPriceWithTax();
    }
    return total;
  }
  /*   This has no parameters. It subtracts the results of g etTotalWithTax
  and getTotalBeforeTax and returns the result. */
  getTax() {
    let tax = this.getTotalWithTax() - this.getTotalBeforeTax();
    {
      return tax;
    }
  }
} //class ends here

module.exports = { Product };
module.exports = { Cart };
