function bubbleSort(array) {
  // change code below this line
  let a, c, t;
  t = 0
  while(true){
    c = 0
    for(let i=0; i<array.length; i++){
      t++
      if(array[i+1] < array[i]){
        a = array[i+1]
        array[i + 1] = array[i]
        array[i] = a
        c++
      }
    }
    if(c == 0) {break}
  }
  console.log(t)
  return array;
  // change code above this line
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
