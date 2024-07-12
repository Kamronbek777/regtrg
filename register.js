// let nameInput = document.querySelector('input')
// let form = document.querySelector('form')

// form.addEventListener('submit', (event) => {
//     if (nameInput.value == localStorage.getItem('userData')) {
//         alert(localStorage.getItem('userData'))
//     }else {
//         alert('Please enter your name')
//     }
// })
// userData.entries(localStorage).map(([id, valueJSON]) => {
//     cityName = JSON.parse(JSON.stringify(localStorage.getItem('name')));
//     console.log(cityName)
// })

let nameInput = document.querySelector('input[name="name"]'); // specify the input field with a name attribute
let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the default form submission behavior

    const userName = nameInput.value.trim(); // get the input value and trim it

    if (userName) {
        localStorage.setItem('userData', userName); // store the user name in local storage
        alert(`Welcome, ${userName}!`); // display a welcome message
    } else {
        alert('Please enter your name'); // display an error message if the input field is empty
    }
});

// retrieve and display stored user data
const storedUserData = localStorage.getItem('userData');
if (storedUserData) {
    console.log(`Stored user data: ${storedUserData}`);
} else {
    console.log('No user data stored');
}
