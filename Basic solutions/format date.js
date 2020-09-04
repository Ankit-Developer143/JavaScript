function formatDate(date) {
    let result = date.split("/")
	return result.reverse().join("")
}console.log(formatDate("11/12/2019"));