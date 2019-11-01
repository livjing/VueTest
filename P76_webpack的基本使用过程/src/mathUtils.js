function add(num1, num2){
	return num1 + num2;
}

function mul(num1, num2){
	return num1 * num2;
}



// CommongJS的模块化导出写法
module.exports = {
	add, 
	mul
}