"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);
var Person = require("../../src/practice_1");

describe("person", function () {
    describe("test person attribute", function () {
        it("test introduce()", function () {
            sinon.spy(console, 'log');
            var person = new Person('Tom', 21);
            var expect_name = 'Tom';
            var expect_age = 21;
            var expect_string = 'My name is Tom. I am 21 years old.';
            var result = person.introduce();
            expect(expect_name).to.equal(person.name);
            expect(expect_age).to.equal(person.age);
            expect(expect_string).to.equal(result);
        });
    });

});