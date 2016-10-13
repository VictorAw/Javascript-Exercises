"use strict";

function bubbleSort(arr) {
  // Go until no more swaps
  let swaps = 1;
  while (swaps > 0) {
    swaps = 0
    // Swap the largest number to the end
    for (let i=0; i<arr.length-1; i++) {
      if (arr[i] > arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swaps++;
      }
    }
  }

  return arr;
}
// console.log(bubbleSort([1, 5, 3, 2, 6]));

function substrings(str) {
  let arr=[];
  let str_arr = str.split("");
  for (var i = 0; i < str_arr.length; i++) {
    for (var j = i; j < str_arr.length; j++) {
      arr.push(str_arr.slice(i, j+1).join(""));
    }
  }

  return arr;
}
console.log(substrings("cat"));
