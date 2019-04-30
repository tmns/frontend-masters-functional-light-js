function increment(x) { return x + 1; }
function decrement(x) { return x - 1; }
function double(x) { return x * 2; }
function half(x) { return x / 2; }

function compose(...fns) {
    return function performReduce(val) {
        return fns.reduceRight(function(currVal, currFunc) {
            return currFunc(currVal);
        }, val)
    }
}

function pipe(...fns) {
    return function performReduce(val) {
        return fns.reduce(function(currVal, currFunc) {
            return currFunc(currVal);
        }, val)
    }
}

var f = compose(decrement,double,increment,half);
var p = pipe(half,increment,double,decrement);

console.log(f(3) === 4);
// true

console.log(f(3) === p(3));
// true
