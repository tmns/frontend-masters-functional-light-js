function returnVal(val) {
    return function() {
        return val;
    }
}

function add(x, y) {
    return x + y;
}

function add2(fn1, fn2) {
    return add(fn1(), fn2());
}

// reduce
function addn(fns) {
    return fns.reduce(function reducer(composedFn, fn) {
        return function() {
            return add2(composedFn, fn);
        }
    })();
}

// recursive
// function addn(fns) {
// if (fns.length > 2) {
// 	return addn(
// 		[
// 			function() {
// 				return add2(fns[0],fns[1]);
// 			}
// 		]
// 		.concat(fns.slice(2))
// 	);
// }
// return add2(fns[0],fns[1]);

// iterative
// function addn(fns) {
//     fns = fns.slice();

//     while (fns.length > 2) {
//         let fn0 = fns[0];
//         let fn1 = fns[1];

//         fns = [
//             function() {
//                 return add2(fn0, fn1);
//             }
//         ]
//         .concat(fns.slice(2));
//     }

//     return add2(fns[0], fns[1]);
// }

var three = returnVal(3);
var five = returnVal(5);
var six = returnVal(6);
var two = returnVal(2);

console.log(add(three(), five()));

console.log(add2(three, five));

console.log(addn([three, five, six, two]));

var nums = [1,1,3,4,4,3,2,0,1,3,2,12,18,0];

var trimmedNums = nums
    .reduce(function reducer(acc, curr) {
        return !~acc.indexOf(curr) ? acc.concat(curr) : acc;
    }, [])

console.log(trimmedNums);

var evenNums = trimmedNums
    .filter(function outTheOdds(num) {
        return num % 2 == 0;
    })

console.log(evenNums);

var fns = evenNums.map(function toFns(evenNum) {
    return returnVal(evenNum);
})

console.log(addn(fns));