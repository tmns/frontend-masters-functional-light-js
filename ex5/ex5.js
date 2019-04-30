function foo(a, b) { 
    return function add() {
        return a + b;
    }
}

var x = foo(3,4); 

console.log(x());	// 7
console.log(x());	// 7

