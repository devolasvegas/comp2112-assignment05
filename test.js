/**
 * Created by devon on 2016-12-08.
 */
var chatbot = require('./src/index.js');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

it("Should return a string", function(){
    var result = chatbot();
    expect(result).to.be.a("string");
});

it("Should return 'Hello.'", function(){
    var result = chatbot();
    expect(result).to.equal('Hello.');
});

it("Should say 'How are you?'", function(){
    // this is giving me the error
    var result = chatbot('hi');
    expect(result).to.equal("How are you?");
});

it("Should still return 'How are you?' if use uppercase", function() {
    var result = chatbot('Hi');
    expect(result).to.be.equal("How are you?");
});