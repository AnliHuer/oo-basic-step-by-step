"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);
var obj = require('../../src/practice_8.js');
var Teacher = obj.teacher;
var Student = obj.student;
var Person = obj.person;
var Class = obj.klass;
var person = new Person('Tom',21);
var student1 = new Student('Tom',21,2);
var student2 = new Student('Json',21,1);
var teacher = new Teacher('Lina',34,2);
var teacher1 = new Teacher('Luna',34);
var klass = new Class(2);




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




describe("Class", function () {
    it("class fields number", function () {
        var class_number = 2;
        expect(klass.number).to.equal(class_number);
    });
});


describe("Student", function () {
    it("student fields name and class and age", function () {
        var student_name = 'Tom';
        var student_age = 21;
        var student_class = 2;
        expect(student1.name).to.equal(student_name);
        expect(student1.age).to.equal(student_age);
        expect(student1.klass.number).to.equal(student_class);
    });
    it('student introduce return a string data', function () {
        var result = student1.introduce();
        expect('My name is Tom. I am 21 years old. I am a Student. I am at Class 2.').to.equal(result);
    });
});



describe("Teacher", function () {
    it("teacher fields name and class and age", function () {
        var teacher_name = 'Lina';
        var teacher_age = 34;
        var teacher_class = 2;
        expect(teacher.name).to.equal(teacher_name);
        expect(teacher.age).to.equal(teacher_age);
        expect(teacher.klass.number).to.equal(teacher_class);
    });
    it('teacher introduce return a string data when the class is not null', function () {
        var result = teacher.introduce();
        expect('My name is Lina. I am 34 years old. I am a Teacher. I teach Class 2.').to.equal(result);
    });
    it('teacher introduce return a string data when the class is  null', function () {
        var result = teacher1.introduce();
        expect('My name is Luna. I am 34 years old. I am a Teacher. I teach No Class.').to.equal(result);
    });

    it('teacher introduceWith return a string data when the class is not null', function () {
        var result1 = teacher.introduceWith(student1);
        expect('My name is Lina. I am 34 years old. I am a Teacher. I teach Tom.').to.equal(result1);
    });
    it('teacher introduceWith return a string data when the class is  null', function () {
        var result2 = teacher.introduceWith(student2);
        expect('My name is Lina. I am 34 years old. I am a Teacher. I don`t teach Json.').to.equal(result2);
    });
});
