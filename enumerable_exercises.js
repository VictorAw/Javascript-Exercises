"use strict";

Array.prototype.myEach = function(cb) {
  for (let i=0; i<this.length; i++) {
    cb(this[i]);
  }
  return this;
}
// let a = [1, 2, 3];
// a.my_each(function(el) {console.log(el)});

Array.prototype.map = function(cb) {
  let arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(cb(this[i]));
  }

  return arr;
}
// let a = [1, 2, 3];
// console.log(a.map(el => el + 1));

Array.prototype.myInject = function(cb) {
  let acc = 0;
  this.myEach(function(el) {
    acc = cb(acc, el);
  })
  return acc;
}
let nums = [1, 2, 3, 4, 5];
console.log(nums.myInject(function (acc, el) {
  return acc + el;
}));
