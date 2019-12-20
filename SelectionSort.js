function selectionSort(array) {
  let min = (arr) => {
    let m, i;
    m = arr[0]
    i = 1;
    while(i<arr.length){
      if(m > arr[i]) {m = arr[i]}
      i++
    }
    return m;
  }

  let newArr = [];
  while(array.length>0){
    newArr.push(min(array));
    array.splice(array.indexOf(Math.min(...array)), 1)
  }
  return newArr;
}

console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 0, 92]));
