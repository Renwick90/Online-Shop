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
  // it('find account by owner name', function(){
  //   var bank = new Bank();
  //   var account = new Account({owner:'Jay',amount:50, type:'business'});
  //   bank.addAccount(account);
  //   var foundAccount = bank.findAccountByOwnerName('Jay');
  //   assert.deepEqual(account, foundAccount);
  // });
  // // Find the total account value.
  // it('should find the total account value', function(){
  //   var bank = new Bank();
  //   var account1 = new Account({owner:'Jay',amount:50, type:'business'});
  //   var account2 = new Account({owner:'Val',amount:150, type:'business'});
  //   bank.addAccount(account1);
  //   bank.addAccount(account2);
  //   assert.equal(200, bank.totalCash());
  // });
  // // Find the average value.
  // it('should find the average value', function(){
  //   var bank = new Bank();
  //   var account1 = new Account({owner:'Jay',amount:50, type:'business'});
  //   var account2 = new Account({owner:'Val',amount:150, type:'business'});
  //   bank.addAccount(account1);
  //   bank.addAccount(account2);
  //   assert.equal(100, bank.accountAverage());
  // });
  // it("should find the total value for an account type", function(){
  //   var bank = new Bank();
  //   var account1 = new Account({owner:'Jay',amount:50, type:'business'});
  //   var account2 = new Account({owner:'Val',amount:150, type:'business'});
  //   var account3 = new Account({owner:'Kieth',amount:150, type:'personal'});
  //   bank.addAccount(account1);
  //   bank.addAccount(account2);
  //   bank.addAccount(account3);
  //   assert.equal( 200, bank.totalCash('business') );
  // });
  // it("should be able to do an interest payment", function(){
  //   var bank = new Bank();
  //   var account1 = new Account({owner:'Jay',amount:50, type:'business'});
  //   var account2 = new Account({owner:'Val',amount:150, type:'business'});
  //   var account3 = new Account({owner:'Kieth',amount:150, type:'personal'});
  //   bank.addAccount(account1);
  //   bank.addAccount(account2);
  //   bank.addAccount(account3);
  //   bank.payInterest(10);
  //   assert.equal( 385, bank.totalCash() );
  // })
})
