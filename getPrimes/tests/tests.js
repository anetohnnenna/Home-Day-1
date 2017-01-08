'use strict'

var chai = require('jasmine'); 

var myApp = require('../app/library.js');

describe("getPrimes tests ", function() {

	describe("Case for booleans", function() {

	    it("should return true for `true`", function() {
	      expect(myApp.getPrimes(true)).toEqual(true);
	    });

  	});
});