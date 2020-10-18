const register = document.getElementById('register');
const signIn = document.getElementById('sign-in');
const signInSection = document.getElementById('sign-in-section');
const createAccountSection = document.getElementById('create-account-section');
const loginButton = document.getElementById('login-button');

const printMessage = (exists, user) => {
    const message = document.querySelector('.message');
    const div = document.createElement('div');
    div.className = 'message';

    if (exists) {
        message.textContent = `Welcome, ${ user }`;
        message.style.backgroundColor = '#67C006';
    }
    else {
        message.textContent = 'Invalid Credentials';
        message.style.backgroundColor = '#F32E2E';
    }   

    message.style.display = 'block';

    setTimeout(() => {
        message.style.display = 'none';
        
        if (exists) {
            window.location.replace("index.html");
        }
    }, 3000);
}

const logIn = () => {
    readTextFile('lerma.json', (text) => {
        const { users } = JSON.parse(text);
        const password = document.getElementById('password');
        const userName = document.getElementById('userName');

        let exists = false;
        let name;

        users.forEach(user => {
            if (user.email === userName.value && user.password === password.value) {
                exists = true;
                name = user.name;
            }
        });

        printMessage(exists, name);
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