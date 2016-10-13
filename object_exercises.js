"use strict";

function Cat(name, owner) {
  this.name = name;
  this.owner = owner;

  Cat.prototype.cuteStatement = function() {
    return `${this.name} loves ${this.owner}`;
  }

  Cat.cuteStatement = function() {
    return "Cute statement";
  }
}

let cat1 = new Cat("Harold", "Mike");
let cat2 = new Cat("Godzilla", "Mike");
console.log(cat1.cuteStatement());
Cat.prototype.cuteStatement = function() {
  return `Everyone loves ${this.name}`;
}
console.log(cat1.cuteStatement());

Cat.prototype.meow = function() {
  return "Meow!";
}
console.log(cat1.meow());
cat1.meow = function() {
  return "Meow meow moew";
}
console.log(cat1.meow());
console.log(cat2.meow());
