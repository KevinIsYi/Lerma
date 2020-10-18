const register = document.getElementById('register');
const signIn = document.getElementById('sign-in');
const signInSection = document.getElementById('sign-in-section');
const createAccountSection = document.getElementById('create-account-section');
const loginButton = document.getElementById('login-button');

const logIn = () => {
    readTextFile('lerma.json', (text) => {
        const { users } = JSON.parse(text);
        const password = document.getElementById('password');
        const userName = document.getElementById('userName');

        let exists = false;

        users.forEach(user => {
            if (user.email === userName.value && user.password === password.value) {
                exists = true;
            }
        });
        console.log(exists);
    })
}

const eventListeners = () => {
    register.addEventListener('click', () => {
        signInSection.style.display = 'none';
        createAccountSection.style.display = 'block';
    });
    signIn.addEventListener('click', () => {
        createAccountSection.style.display = 'none';
        signInSection.style.display = 'block';
    });
    loginButton.addEventListener('click', logIn);
};

eventListeners();