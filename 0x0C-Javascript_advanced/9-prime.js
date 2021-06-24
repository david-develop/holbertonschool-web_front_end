const countPrimeNumbers = () => {
  let count = 0;
  let prime;
  for (let i = 2; i <= 100; i++) {
    prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      count += 1;
    }
  }
  return count;
};

const time0 = performance.now();
countPrimeNumbers();
const time1 = performance.now();
console.log(
  `Execution time of printing countPrimeNumbers was ${time1 - time0} milliseconds.`
);