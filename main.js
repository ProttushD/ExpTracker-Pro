const loginMain = document.createElement("div");
loginMain.classList.add("login-main");

const loginBox = document.createElement("div");
loginBox.classList.add("login-box")

const h1 = document.createElement("h1");
h1.textContent = "Welcome Back";

const p = document.createElement("p");
p.textContent = "Login to ExpTrack Pro";

const form = document.createElement("form");

const label = document.createElement("label");
label.textContent = "Username"

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter Username";

const pasLabel = document.createElement("label");
pasLabel.textContent = "Password"

const pasInput = document.createElement("input");
pasInput.type = "password";
pasInput.placeholder = "Enter Password";

const btn = document.createElement("button");
btn.classList.add("form-btn")
btn.type = "submit";


const span = document.createElement("span");
span.textContent = "Login";

const np = document.createElement("p");
np.textContent = "Don't have an account ?";

const a = document.createElement("a");
a.classList.add("hp-link")
a.href = "#";
a.textContent = " Register here"






document.body.append(loginMain);
loginMain.append(loginBox);
loginBox.append(h1);
loginBox.append(p);
loginBox.append(form);
form.append(label);
form.append(input);
form.append(pasLabel);
form.append(pasInput);
form.append(btn);
btn.append(span);
loginBox.append(np);
np.append(a);


// a.addEventListener("click", () =>{
//     h1.textContent = "Create Account";
//     p.textContent = "Join FinTrack Pro";

// })

let isLogin = true;


function showLogin() {

    h1.textContent = "Welcome Back";
    p.textContent = "Login to ExpTrack Pro";
    label.textContent = "Username";
    input.placeholder = "Enter Username";
    pasLabel.textContent = "Password";
    pasInput.placeholder = "Enter Password";
    span.textContent = "Login";
    np.innerHTML = "";
    np.append("Don't have an account? ", a);
    a.textContent = "Register here";



    isLogin = true;

}


function showRegister() {

    h1.textContent = "Create Account";
    p.textContent = "Join FinTrack Pro";
    label.textContent = "Choose Username";
    input.placeholder = "Choose Username";
    pasLabel.textContent = "Choose Password";
    pasInput.placeholder = "Choose Password";
    span.textContent = "Register";
    np.innerHTML = "";
    np.append("Already have an account? ", a);
    a.textContent = "Login here";

    isLogin = false;

}

function toggleForm() {

    if (isLogin) {
        showRegister();
    }

    else {
        showLogin();
    }

}

a.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForm();

});

showLogin();





form.addEventListener("submit", (e) => {

    e.preventDefault();

    const username = input.value;
    const password = pasInput.value;


    console.log(username);
    console.log(password);

    input.value = "";
    pasInput.value = "";
})