function helloWorld(num) {
	if(num%3==0 && num%5==0){
		return "Hello World"
	}
	else if (num%3==0){
		return "Hello"
	}
	else if(num%5==0){
		return "World"
	}
	else{
		return num;
	}
	
}
console.log(helloWorld(5));

//op:-World