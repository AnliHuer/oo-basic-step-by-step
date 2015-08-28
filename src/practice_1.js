function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function(){
    var str = 'My name is '+this.name +'. I am '+this.age+ ' years old.';
    return str;
};

module.exports = Person;

