/// Ember Object Diagnostic ///

// Use Ember Objects and Classes to represent a shopping cart!
// Your abstractions will be `Cart` and `Order`.
//
// An Order should have
//  -  a unit price
//  -  a quantity
//  -  a computed property called `orderPrice`, equal to price times quantity
//
// A Cart should have
//  -  an `addToCart` method, which adds a given Item to an array
//      called `orders` (HINT: You'll probably need to look through the
//      documentation for this one.)
//  -  a computed property called `totalPrice`, equal to the sum of
//      the `orderPrice` values for everything in the cart); it should be
//      recalculated any time an Order is added to the cart, removed from the
//      cart, or modified.
//
// Once you've created the necessary Ember Classes, create a new Cart instance,
//  and fill that cart up with three new product orders having the following
//  quantities, product names, and prices:
//  -  Order 1 : 2 hats ($5 each)
//  -  Order 2 : 1 desk lamp ($20 each)
//  -  Order 3 : 3 hand towels ($8 each)


const Order = Ember.Object.extend({
  orderPrice: Ember.computed('unitPrice', 'quantity', function(){
    return `${this.get('unitPrice')} * ${this.get('quantity')}`;
  })
});

const Cart = Ember.Object.extend({
  // addToCart: function(){
  //   // adds a given item to an array called orders
  // },
  totalPrice: Ember.computed('orderPrice', function(){
    return `${this.get('totalPrice')} = ${this.get('orderPrice')}`;
  });

let order1 = Order.create({
  item: 'hat',
  unitPrice: 5,
  quantity: 2,
});

let order2 = Order.create({
  item: 'desk lamp',
  unitPrice: 20,
  quantity: 1,
});

let order3 = Order.create({
  item: 'hand towel',
  unitPrice: 8,
  quantity: 3,
});
