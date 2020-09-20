let output = document.getElementById('output')
let output2 = document.getElementById('output2')

async function getUserAsync(name) 
{
  let response = await fetch(`https://api.github.com/users/${name}`);
  let data = await response.json()
  output.innerHTML = data.login;
  output2.innerHTML = data.id;
  
}
//fetch id
let data = getUserAsync('pratham82')

  




