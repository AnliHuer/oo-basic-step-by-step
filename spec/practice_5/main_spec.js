"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);
var obj = require('../../src/practice_5.js');
var Person = obj.person;
var Student = obj.student;
var Worker = obj.worker;

var person = new Person('Tom',21);
var student = new Student('Tom',21 ,2);
var worker = new Worker('Tom',21);



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
        expect(student.klass).to.equal(student_class);
    });
    it('student introduce return a string data', function () {
        var result = student.introduce();
        expect('My name is Tom. I am 21 years old. I am a Student. I am at Class 2.').to.equal(result);
    });
});




describe("Worker", function () {
    it("worker fields name and age", function () {
        var worker_name = 'Tom';
        var worker_age = 21;
        expect(worker.name).to.equal(worker_name);
        expect(worker.age).to.equal(worker_age);
    });
    it('worker introduce return a string data', function () {
        var result = worker.introduce();
        expect('My name is Tom. I am 21 years old. I am a Worker. I have a job.').to.equal(result);
    });
});