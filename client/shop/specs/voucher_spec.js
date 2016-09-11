var Voucher = require('../voucher');
var assert = require('assert');

describe('voucher', function(){
  it('should have a number', function(){
    var voucher = new Voucher({number: 'A', discount:  5 });
    assert.equal(voucher.number, 'A');
  });

})