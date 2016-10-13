"use strict";

Array.prototype.my_uniq = function() {
  let arr = [];
  this.forEach( (el) => {
    if (!arr.includes(el)){
      arr.push(el);
    }
  })
  return arr;
}
// console.log([1, 2, 1, 3, 3].my_uniq())

Array.prototype.two_sum = function() {
  let arr = [];
  for(let i=0; i<this.length-1; i++){
    for(let j=i+1; j<this.length; j++){
      if (this[i] + this[j] === 0){
        arr.push([i, j]);
      }
    }
  }
  return arr;
}
// console.log([-1, 0, 2, -2, 1].two_sum())

Array.prototype.my_transpose = function() {
  let arr = [];
  for (let i=0; i<this.length; i++) {
    arr.push([]);
    for (let j = 0; j < this.length; j++) {
      arr[i][j] = this[j][i];
    }
  }
  return arr;
}
console.log([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]].my_transpose());
