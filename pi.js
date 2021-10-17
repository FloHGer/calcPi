const findPi = (n) => {
  let valid = 0;
  let total = n;
  for(let i = 0; i < n; i++){
    if(Math.random() **2 + Math.random() **2 <= 1) valid++;
  }
  const myPI = 4 * valid / total;
  const diff = myPI > Math.PI ? myPI - Math.PI : Math.PI - myPI;
  console.log('given:', Math.PI);
  console.log('calculated:', myPI);
  console.log('diff:', diff)
}

findPi(10 ** 8)
