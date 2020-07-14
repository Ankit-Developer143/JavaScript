function getCase(str) {
	if (str.toUpperCase() === str) {
		return "upper"
	} else if (str.toLowerCase() === str) {
		return "lower"
	} else {
		return "mixed"
	}
}
console.log(getCase("Ankit"));


//Or
const getCase1 = s =>
	s == s.toUpperCase() ? 'upper' :
		s == s.toLowerCase() ? 'lower' : 'mixed';
console.log(getCase1("Ankit"));//Mixed
