function cacheFunction(fn) {
  const cache = {};
  return (arg) => {
    if (arg in cache) {
      return cache[arg];
    }
    const rt = fn(arg);
    cache[arg] = rt;
    return rt;
  };
}

function fibo(ith) {
  let n = 1;
  let n1 = 1;
  for (let i = 1; i < ith; i += 1) {
    const t = n1;
    n1 += n;
    n = t;
  }
  // console.log({n, n1});
  return n;
  // if (ith <= 1) {
  //   return ith;
  // }
  // return fibo(ith - 1) + fibo(ith - 2);
}

const memorisedFibo = cacheFunction(fibo);

function sumFibs(num) {
  let sumOdds = 0;
  let i = 1;
  const fiboNum = memorisedFibo(i);
  while (fiboNum <= num) {
    if (fiboNum % 2 === 1) {
      sumOdds += fiboNum;
    }
    i += 1;
  }
  return sumOdds;
}

export { sumFibs, cacheFunction };
