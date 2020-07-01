function add(num){
	let arr = [];
	for(let i=0;i<num;i++)
	{
		arr.push(i);
	}

	return arr.reverse();
}

console.log(add(5));