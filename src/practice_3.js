function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function(){
    return 'My name is '+this.name+'. I am '+this.age+' years old.'
}

function Student(name,age,_class){
    Person.call(this,name,age);
    this.class = _class;
}

Student.prototype.introduce = function(){
    return 'I am a Student. I am at Class '+this.class+'.';
}

module.exports = {Person:Person,Student:Student};


