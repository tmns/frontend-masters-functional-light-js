function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}


function pickNumber(nums) {
	var newNums = [...nums];
	var num;
	
	do {
		num = lotteryNum();
	} while (newNums.includes(num));

	newNums.push(num);
	newNums.sort(function(a,b) {
		return a - b;
	});

	return newNums;
}

var luckyLotteryNumbers = [];

for (var i = 0; i < 6; i++) {
	luckyLotteryNumbers = pickNumber(Object.freeze(luckyLotteryNumbers));
}

console.log(luckyLotteryNumbers);
