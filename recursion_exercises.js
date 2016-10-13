function range(start, end) {
  let arr = [start];
  if (end < start) {
    return [];
  }

  // let arr = range(start, end-1);
  // arr.push(end)
  // return arr

  return arr.concat(range(start+1, end));
}
// console.log(range(1, 10));

function recursive_sum(arr) {
  if (arr.length == 0) {
    return 0;
  }

  return arr[arr.length-1] + recursive_sum(arr.slice(0, arr.length-1));
}
// console.log(recursive_sum([1, 2, 3]));

function exp1(b, n) {
  if (n === 0) {
    return 1;
  }
  return b * exp1(b, n-1);
}

function exp2(b, n) {
  if (n===0) {
    return 1;
  }
  else if (n===1) {
    return b;
  }
  else if (n % 2 === 0) {
    let num = exp2(b, n / 2);
    return num * num;
  }
  else {
    let num = exp2(b, (n-1) / 2);
    return b * num * num;
  }
}
// console.log(exp1(2,3))
// console.log(exp2(2,3))

function fib(n) {
  if (n === 0) {
    return [];
  }
  else if (n === 1) {
    return [0];
  }
  else if (n === 2) {
    return [0, 1];
  }
  else {
    let prev = fib(n-1);
    prev.push(prev[prev.length-1] + prev[prev.length-2])
    return prev
  }
}
// console.log(fib(15))

function bsearch(arr, tar) {
  if (arr.length === 0) {
    return NaN;
  }
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === tar) {
    return mid;
  }
  else if (arr[mid] > tar) {
    return bsearch(arr.slice(0, mid), tar);
  }
  else {
    return bsearch(arr.slice(mid+1, arr.length-1), tar) + mid + 1;
  }
}
// console.log(bsearch([1,2,3,4,5,7], 9))

function mergeHelper(left, right) {
  let arr = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      arr.push(right.shift());
    }
    else {
      arr.push(left.shift());
    }
  }

  if (left.length > 0) {
    arr = arr.concat(left);
  }

  if (right.length > 0) {
    arr = arr.concat(right);
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  return mergeHelper(mergeSort(left), mergeSort(right));
}
// console.log(mergeSort([1, 2, 6, 5, 3, 76, 25, 6]))

function subsets(arr) {
  if (arr.length === 0) {
    return [[]];
  }

  let prev = subsets(arr.slice(0, arr.length-1));
  // console.log(prev)
  let new_inserts = prev.map (el => {
    a = el.slice(0)
    a.push(arr[arr.length-1])
    return a
  });
  // console.log(new_inserts)
  return prev.concat(new_inserts);
}
console.log(subsets([1,2,3]));
