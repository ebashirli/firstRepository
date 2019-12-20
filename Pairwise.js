function pairwise(arr, arg) {
  if(arr.length === 0){
    return 0
  }
  
  let couples = []
  for(let i=0; i<arr.length-1; i++){
    for(let j= i + 1; j<arr.length; j++){
      (arr[i] + arr[j] === arg) && couples.indexOf(i) === -1 && couples.indexOf(j) === -1 ? couples.push(i, j) : false
      }
    }
  return couples.reduce((a,b)=>a+b);
}

console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
