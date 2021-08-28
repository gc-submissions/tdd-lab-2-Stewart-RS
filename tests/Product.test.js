const { Product } = require("../src/js/Product");

/* Confirm that the constructor parameters correctly set three properties on the class,
apples and oranges. (Write two test cases with different values.) */

describe("Product", () => {
  test("sets properties on class", () => {
    expect(new Product("apples", 3, true)).toEqual({
      name: "apples",
      price: 3,
      taxable: true,
    });
    expect(new Product("oranges", 2, false)).toEqual({
      name: "oranges",
      price: 2,
      taxable: false,
    });
  });

  /*   Given a Product with taxable true, g etPriceWithTax returns the price + 10%.
Remember to use toBeCloseTo with floating point numbers. (Write two test cases with
different prices.) */
  test("taxable product return price + 10%", () => {
    const productWithTax = new Product("shirt", 1, true);
    expect(productWithTax.getPriceWithTax()).toEqual(1.1);
  });
  test("taxable product return price + 10%", () => {
    const productWithTax = new Product("shirt", 3, true);
    expect(productWithTax.getPriceWithTax()).toBeCloseTo(3.3);
  });

  test("non taxable product returns price", () => {
    const product = new Product("pants", 1, false);
    expect(product.getPriceWithTax()).toBe(1);
  });
});
