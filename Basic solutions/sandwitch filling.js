function getFillings(sandwich) {
    let result = sandwich.slice(1, -1);
    return result

}
console.log(getFillings(["bread", "ham", "cheese", "ham", "bread"]));
//op:-[ 'ham', 'cheese', 'ham' ]
    

// function getFillings(sandwich) {
// 	sandwich.pop();
// 	sandwich.shift();
// 	return sandwich;
// }	


