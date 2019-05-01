function loginUser() {
    const email = document.getElementById('email-field').value;
    const password = document.getElementById('password-field').value;
    const authMessageEl = document.getElementById('auth-message');

    if (email.length == 0 || password.length == 0) {
        alert('You must input your credentials');
        authMessageEl.innerHTML = 'Please input correct credentials';
    } else {
        const validUser = true;

        if (validUser) {
            window.location.replace('./home/home_page.html');
        }
        else {
            authMessageEl.innerHTML = 'User does not exist';
        }
    }
}

