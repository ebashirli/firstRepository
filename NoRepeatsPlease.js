function permAlone(str) {
  let f = (num) => num == 0 ? 1 : f(num - 1) * num;
  let strL = str.length;
  let fStrL = f(strL);
  let p = [];
  for(let i=0;i<fStrL;i++){
    p.push([]);
  }
  
  for(let z=0; z<strL;z++){
    for(let h=0; h<fStrL/f(strL - z); h++){
      let arr = [...str];
      for(let t=0; t<p[h * f(strL - z)].length; t++){
        arr.splice(arr.indexOf(p[h * f(strL - z)][t]), 1);
      }
      let fArr = f(arr.length-1)
      let arrL = arr.length
        for(let i=0; i<arrL; i++){
          for(let j=0; j<fArr; j++){
            p[j + i * fArr + h * f(strL - z)].push(arr[i])}}}}
  return p.map(a=>a.join(''))
          .filter(a=>!(/([a-zA-Z])\1/).test(a))
          .length
}

console.log(permAlone('aab'));
