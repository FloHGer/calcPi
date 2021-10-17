const findPi = (n) => {
const myPIs = [];
for(let i = 0; i < n; i++){
  let inside = 0;
  let total = 0;
  for(let i = 0; i < n; i++){
    if(Math.random() **2 + Math.random() **2 <= 1) inside++;
    total++;
  }
  myPIs.push(4 * inside / total);
}
const myPI = myPIs.reduce((prev, curr) => prev += curr) / myPIs.length;
const diff = myPI > Math.PI ? myPI - Math.PI : Math.PI - myPI;
  console.log('given:', Math.PI);
  console.log('calculated:', myPI);
  console.log('diff:', diff);
}

findPi(10000)