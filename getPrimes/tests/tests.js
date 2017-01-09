'use strict'

var chai = require('jasmine'); 

var myApp = require('../app/library.js');

describe("getPrimes tests ", function() {

	describe("Case for getPrimes function", function() {

	    it("should return ", function() {
	      expect(myApp.getPrimes(true)).toEqual(true);
	    });

  	});
});