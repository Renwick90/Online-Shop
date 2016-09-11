var Shop = function(){
  this.items = [];
  this.cart = [];
}

Shop.prototype = {
  addItem: function(item){
    if(item.quantity >= 1){
      this.cart.push(item);
      item.quantity -= 1;
    }else{
      return "out of stock"
    }
  },

  removeItem: function(item){
    this.cart.splice(item)
  },

  totalPrice: function(){
    var total = 0;
    for (var item of this.cart){
      total += item.price;
    }
    return total;
  },

  redeemVoucher: function(voucher){
    var total = 0;
    for (var item of this.cart){
      total += item.price;
    }
    return total - voucher.discount;
  },
}


module.exports = Shop;
