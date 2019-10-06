const add = n => n + 1;

const double = n => n * 2;

const compose = (...fns) => x => fns.reduceRight((v,f) => f(v), x)

const addThenDouble = compose(double, add)

console.log(addThenDouble(5));
