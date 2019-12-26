function mergeSort(array) {
  // change code below this line
  let merge = (a,b) => {
    let arr = [];
    while(a.length!==0 || b.length!==0){
      if(a[0]<=b[0] || b.length === 0){
        arr.push(a[0]);
        a.shift();
      }
      else{
        arr.push(b[0]);
        b.shift();
      }
    }
    return arr;
  }
  if(array.length === 1){
    return array;
  }
  else{
    array = merge(mergeSort(array.slice(0, array.length/2)), mergeSort(array.slice(array.length/2)))
  }
  // change code above this line
  return array;
}
console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
