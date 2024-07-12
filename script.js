let userName = document.querySelector('.name');
let userAge = document.querySelector('.age');
let userNumber = document.querySelector('.phone');
let userPassword = document.querySelector('.password');
let userMail = document.querySelector('.email')
let userForm = document.querySelector('form')
let userLink = document.querySelector('a');
let userBtn = document.querySelector('button');

// console.log(userAge, userMail, userName, userNumber, userPassword);

userForm.addEventListener('submit', function(e){
    e.preventDefault();
    let nameValue = userName.value;
    let ageValue = userAge.value;
    let numberValue = userNumber.value;
    let passwordValue = userPassword.value;
    let emailValue = userMail.value;
    
    let data = {
            name: nameValue,
            age: ageValue,
            phone: numberValue,
            password: passwordValue,
            email: emailValue
}
    
    console.log(data);
    localStorage.setItem('userData', JSON.stringify(data));


})
