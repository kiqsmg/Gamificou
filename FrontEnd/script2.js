


//First we need to get the users input
function handleButtonClick() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    
    window.usernamevalue = username.value;
    window.passwordvalue = password.value;

    checkLogin(usernamevalue, passwordvalue);

}

//Then we need to define valid usernames and passwords...
const validUsers = {
    'user1': 'password1',
    'user2': 'password2',
    'user3': 'password3'
};


//Now we need a function that will go and check the username and password...

function checkLogin(username, password) {
    if (validUsers[username] === password) {
        alert('Login successful');
        return true;
    } else {
        alert('Invalid usernam or password');
        return false;
    }
}

//Call checkLogin function with user input

//checkLogin(username, password);