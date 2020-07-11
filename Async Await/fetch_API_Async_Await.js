async function getdata() {
    const data = await fetch('https://api.github.com/users')
    const result = await data.json();
    return result;

}
getdata()
    .then(value => console.log(value))
