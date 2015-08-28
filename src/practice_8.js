function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function () {
    return 'My name is ' + this.name + '. I am ' + this.age + ' years old.'
}


function Class(number) {
    this.number = number;
}

function Student(name, age, klass) {
    Person.call(this, name, age);
    this.klass =new Class(klass);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.super_introduce = Student.prototype.introduce;

Student.prototype.introduce = function () {
    return this.super_introduce() + ' I am a Student. I am at Class ' + this.klass.number + '.';
}


function Teacher(name, age ,klass) {
    Person.call(this, name, age);
    this.klass =new Class(klass);
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.super_introduce = Teacher.prototype.introduce;

Teacher.prototype.introduce = function () {
    if(this.klass.number){
        return this.super_introduce() + ' I am a Teacher. I teach Class '+this.klass.number+'.';
    }else{
        return this.super_introduce() + ' I am a Teacher. I teach No Class.';
    }
};

Teacher.prototype.introduceWith = function (student) {
    if(student.klass.number === this.klass.number){
        return this.super_introduce() + ' I am a Teacher. I teach '+student.name+'.';
    }else{
        return this.super_introduce() + ' I am a Teacher. I don`t teach '+student.name+'.';
    }
}




module.exports = {person: Person, student: Student, teacher: Teacher, klass: Class};