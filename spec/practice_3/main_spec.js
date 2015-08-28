"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);
var obj = require('../../src/practice_3.js');
var Person = obj.Person;
var Student = obj.Student;
var person = new Person('Tom', 21);
var student = new Student('Tom', 21, 2);


describe("Person", function () {
    it("person fields name and age", function () {
        var expect_name = 'Tom';
        var expect_age = 21;
        expect(expect_name).to.equal(person.name);
        expect(expect_age).to.equal(person.age);
    });
    it('person introduce return a string data', function () {
        var result = person.introduce();
        expect('My name is Tom. I am 21 years old.').to.equal(result);
    });
});


describe("Student", function () {
    it("student fields name and class and age", function () {
        var student_name = 'Tom';
        var student_age = 21;
        var student_class = 2;
        expect(student.name).to.equal(student_name);
        expect(student.age).to.equal(student_age);
        expect(student.class).to.equal(student_class);
    });
    it('student introduce return a string data', function () {
        var result = student.introduce();
        expect('I am a Student. I am at Class 2.').to.equal(result);
    });
});