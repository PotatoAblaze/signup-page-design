const emailBox = document.querySelector("#email");
const passwordBox = document.querySelector("#password");
const confirmpasswordBox = document.querySelector("#confirm_password");

const emailError = document.querySelector("#email_error");
const passwordError = document.querySelector("#password_error");

const form = document.querySelector("form");

emailBox.addEventListener("input", (event) => {
    if(emailBox.validity.valid || emailBox.value.length === 0)
    {
        emailError.textContent = "";
    }
    else
    {
        emailError.textContent = "*Enter a valid email address!";
    }
})

function checkPassword(event)
{
    if(passwordBox.value.length === 0)
    {
        passwordError.textContent = "*Entering a password is mandatory";
        passwordBox.classList.add("error-box");
        confirmpasswordBox.classList.add("error-box");
    }
    else if(passwordBox.value.length < 8)
    {
        passwordError.textContent = "*Password must be at least 8 characters long";
        passwordBox.classList.add("error-box");
        confirmpasswordBox.classList.add("error-box");
    }
    else if(passwordBox.value !== confirmpasswordBox.value)
    {
        passwordError.textContent = "*Passwords do not match";
        passwordBox.classList.add("error-box");
        confirmpasswordBox.classList.add("error-box");
    }
    else
    {
        passwordError.textContent = "";
        passwordBox.classList.remove("error-box");
        confirmpasswordBox.classList.remove("error-box");
    }
}

passwordBox.addEventListener("input", checkPassword);
confirmpasswordBox.addEventListener("input", checkPassword);

form.addEventListener("submit", (event) => {
    const condition = emailBox.validity.valid && passwordBox.value.length >= 8 && passwordBox.value === confirmpasswordBox.value;
    if(condition)
    {
    }
    else
    {
        alert("There is a problem with your inputs");
        event.preventDefault();
    }
})