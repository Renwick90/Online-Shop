var Shop = function(){
  this.items = [];
  this.cart = [];
}

Shop.prototype = {
  addItem: function(item){
    this.cart.push(item);
  },

  removeItem: function(item){
    this.cart.splice(item)
  },

  totalPrice:function(){
    var total = 0;
    for (var item of this.cart){
      total += item.price;
    }
    return total;
  },
  
  // filteredAccounts: function(type){
  //   if(!type) return this.accounts
  //   var filteredAccounts = [];
  //   for (var account of this.accounts) {
  //     if(type === account.type)
  //       filteredAccounts.push(account);
  //   }
  //   return filteredAccounts;
  // },
  // totalCash:function(type){
  //   var total = 0;
  //   for (var account of this.filteredAccounts(type)) {
  //     total += account.amount;
  //   }
  //   return total;
  // },
  // accountAverage:function(){
  //   return this.totalCash()/this.accounts.length;
  // },
  // payInterest(percentage){
  //   var multiplier = 1 + (percentage/100)
  //   for(var account of this.accounts){
  //     account.amount = account.amount * multiplier
  //   }
  // }
}


module.exports = Shop;
