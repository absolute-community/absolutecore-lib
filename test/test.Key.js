'use strict';

var chai = require('chai');
var bitcore = require('../bitcore');

var should = chai.should();

var KeyModule = bitcore.KeyModule;
var Key;
describe('Key', function() {
  it('should initialze the main object', function() {
    should.exist(KeyModule);
  });
  it('should be able to create class', function() {
    Key = KeyModule.Key;
    should.exist(Key);
  });
  it('should be able to create instance', function() {
    var k = new Key();
    should.exist(k);
  });
});





