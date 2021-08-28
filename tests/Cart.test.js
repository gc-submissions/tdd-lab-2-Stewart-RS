const { Cart } = require("../src/js/Cart");
const { Product } = require("../src/js/Product");

/* describe("Cart", () => {
  test.todo("add Cart tests here");

}); */

describe("Cart Class Construct test", () => {
  test("# 1 - construct set items property to an empty array", () => {
    const myCart = new Cart();
    expect(myCart.items).toEqual([]);
  });

  test("# 2 - Call add ONCE", () => {
    let cart = new Cart();
    cart.add(new Product("oranges", 2, true));
    expect(cart.items).toEqual([new Product("oranges", 2, true)]);
  });

  test("# 3 - Call add TWICE", () => {
    let cart = new Cart();
    cart.add(new Product("oranges", 2, true));
    cart.add(new Product("apples", 5, false));
    expect(cart.items).toEqual([
      new Product("oranges", 2, true),
      new Product("apples", 5, false),
    ]);
  });

  test("# 4A - Get item count - TWO items", () => {
    const myCart = new Cart();
    myCart.add(new Product("oranges", 2, true));
    myCart.add(new Product("apples", 5, false));
    expect(myCart.getItemCount()).toBe(2);
  });

  test("# 4A - Get item count - Zero items", () => {
    const myCart = new Cart();
    expect(myCart.getItemCount()).toBe(0);
  });

  test("# 5A - Get Total Before Tax - TWO Item mixed tax", () => {
    const myCart = new Cart();
    myCart.add(new Product("sushi", 4, true));
    myCart.add(new Product("coke", 4, true));
    expect(myCart.getTotalBeforeTax()).toEqual(8);
  });

  test("# 5B - Get Total Before - THREE Item mixed tax", () => {
    const myCart = new Cart();
    myCart.add(new Product("pop", 4, false));
    myCart.add(new Product("tickets", 4, true));
    myCart.add(new Product("plants", 2, true));
    expect(myCart.getTotalBeforeTax()).toEqual(10);
  });

  test("# 6A - Total with Tax with all non-taxable item (3)", () => {
    const myCart = new Cart();
    myCart.add(new Product("pop", 4, false));
    myCart.add(new Product("tickets", 4, false));
    myCart.add(new Product("latte", 4, false));
    expect(myCart.getTotalWithTax()).toEqual(12);
  });

  test("# 6B - Total with Tax with taxable mixed (non tax = 10)", () => {
    const myCart = new Cart();
    myCart.add(new Product("pop", 4, false)); //4
    myCart.add(new Product("tickets", 4, true)); //4.4
    myCart.add(new Product("plants", 2, true)); //2.2 rounds to 2
    // reads - 4 + 4.4 + 2.2 = 10.600000000000001
    //accepts 10.600000000000001 to 10.6
    expect(myCart.getTotalWithTax()).toBeCloseTo(10.6);
  });

  test("# 7 - Show Tax of taxable item mixed", () => {
    const myCart = new Cart();
    myCart.add(new Product("pop", 4, false)); //4
    myCart.add(new Product("tickets", 4, true)); //4.4
    myCart.add(new Product("plants", 2, true)); //2.2 rounds to 2
    expect(myCart.getTax()).toBeCloseTo(0.6);
  });
});
