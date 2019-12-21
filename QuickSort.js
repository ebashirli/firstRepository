function quickSort(array) {
  if(array.length === 0 ||  array.length === 1 || (array.length === 2 && array[0] === array[1])){
    return array;
  }
  else{
    let pv = array.reduce((a,b)=>a+b) / array.length;
    let [lh, rh] = [[], []];
    array.forEach(e => e < pv ? lh.push(e) : rh.push(e))
    return [...quickSort(lh), ...quickSort(rh)];
  }
}

// test array:
let a = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

console.log(quickSort(a))
