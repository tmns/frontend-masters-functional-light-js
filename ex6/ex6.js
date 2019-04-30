function mult(product, num, ...nums) {
	if (nums.length == 0) return product * num;
	return product * mult(num, ...nums);
}

console.log(mult(3,4,5));	// 60

console.log(mult(3,4,5,6));	// 360
