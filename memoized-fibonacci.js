const memoize = (fn) => {
    const cache = {};

    return (n) => {
        if (!cache[n]) {
            let result = fn(n);
            cache[n] = result;
        }
        return cache[n];
    }

}
const fibonacci = n => {
    if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Comparaison

const fastFib = memoize(fibonacci);

console.time("Classic Fibonacci");
fibonacci(40); 
console.timeEnd("Classic Fibonacci");

console.time("Memoized Fibonacci - 1st Call");
fastFib(40);
console.timeEnd("Memoized Fibonacci - 1st Call");

console.time("Memoized Fibonacci - 2nd Call");
fastFib(40);
console.timeEnd("Memoized Fibonacci - 2nd Call");