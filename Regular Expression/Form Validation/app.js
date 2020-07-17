document.getElementById('name').addEventListener('blur', validateName)

document.getElementById('city').addEventListener('blur', validatecity)
document.getElementById('email').addEventListener('blur', validateEmail)
document.getElementById('phone').addEventListener('blur', validatePhoneNumber)


function validateName() {
    const name = document.getElementById('name')
    const re = /^[a-zA-Z]{2,10}$/;
    if (!re.test(name.value)) {
        name.classList.add('is-invalid')
    } else {
        name.classList.remove('is-invalid')
    }
}
function validatecity() {
    const city = document.getElementById('city')
    const re = /^[A-Za-z]{2,10}$/;
    const rex = /^[0-9]/;
    const rexp = /[0-9]$/;
    if (!re.test(city.value)) {
        city.classList.add('is-invalid')
    }
    else {
        city.classList.remove('is-invalid')
    }
    if (rex.test(city.value)) {
        alert("Do not Enter Number Inside the Box and You are Using Number Beginning of the Word")
    } else if (rexp.test(city.value)) {
        alert("You are Using Number end of Your Words ! ")
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if (!reg.test(email.value)) {
        email.classList.add('is-invalid')
    } else {
        email.classList.remove('is-invalid')
    }
}
function validatePhoneNumber() {
    const name = document.getElementById('phone')
    const re = /^[0-9]{10}$/;
    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid')
    } else {
        phone.classList.remove('is-invalid')
    }
}










