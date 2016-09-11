var Shop = require('../shop');
var Item = require('../item');
var Voucher = require('../voucher');
var assert = require('assert');

describe('shop', function(){
  it('should start off with no items in cart', function(){
    var shop = new Shop();
    assert.equal(0, shop.cart.length);
  });
  it('should be able to add item to cart', function(){
    var shop = new Shop();
    var item = new Item({name: 'Almond Toe Court Shoes', color:  'Patent Black', category:'Women’s Footwear' , price: 99.00, quantity: 5 });
    shop.addItem(item);
    assert.deepEqual(item, shop.cart[0]);
  });
  it('should be able to remove item from cart', function(){
    var shop = new Shop();
    var item = new Item({name: 'Almond Toe Court Shoes', color:  'Patent Black', category:'Women’s Footwear' , price: 99.00, quantity: 5 });
    shop.addItem(item);
    shop.removeItem(item);
    assert.deepEqual(0, shop.cart.length);
  });

  it('should be able to get total price of cart', function(){
    var shop = new Shop();
    var item1 = new Item({name: 'Almond Toe Court Shoes', color:  'Patent Black', category:'Women’s Footwear' , price: 99.00, quantity: 5 });
    var item2 = new Item({name: 'Suede Shoes', color:'Blue', category: 'Women’s Footwear', price: 42.00, quantity:4 });
    shop.addItem(item1);
    shop.addItem(item2);
    assert.deepEqual(141.00, shop.totalPrice());

  });

  it('should deduct discount value from total price of cart', function(){
    var shop = new Shop();
    var item1 = new Item({name: 'Almond Toe Court Shoes', color:  'Patent Black', category:'Women’s Footwear' , price: 99.00, quantity: 5 });
    var item2 = new Item({name: 'Suede Shoes', color:'Blue', category: 'Women’s Footwear', price: 42.00, quantity:4 });
    var voucher = new Voucher({number: 'A', discount: 5})
    shop.addItem(item1);
    shop.addItem(item2);
    
    assert.deepEqual(136, shop.redeemVoucher(voucher))
  });

  it('should reduce item quantity when added to cart', function(){
    var shop = new Shop();
    var item = new Item({name: 'Almond Toe Court Shoes', color:  'Patent Black', category:'Women’s Footwear' , price: 99.00, quantity: 5 });
    shop.addItem(item);
    assert.deepEqual(4, item.quantity)
  })

  it('should display warning when out of stock', function(){
    var shop = new Shop();
    var item = new Item({name: 'Almond Toe Court Shoes', color:  'Patent Black', category:'Women’s Footwear' , price: 99.00, quantity: 0 });
    
    assert.deepEqual("out of stock", shop.addItem(item))
  })
 
})
