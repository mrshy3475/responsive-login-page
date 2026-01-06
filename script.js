window.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    registerBtn.addEventListener("click", () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
        container.classList.remove("active");
    });

    // INPUTS
    const loginPassword = document.getElementById("login-password");
    const password = document.getElementById("signup-password");
    const confirmPassword = document.getElementById("confirm-password");
    const warning = document.getElementById("password-warning");
    const checkbox = document.getElementById("terms-checkbox");
    const signupBtn = document.getElementById("signup-btn");

    // PASSWORD MATCH CHECK
    confirmPassword.addEventListener("input", () => {
        if (password.value !== confirmPassword.value) {
            warning.style.visibility = "visible";
        } else {
            warning.style.visibility = "hidden";
        }
    });

    // ENABLE SIGNUP BUTTON ONLY IF TERMS ACCEPTED
    checkbox.addEventListener("change", () => {
        signupBtn.disabled = !checkbox.checked;
    });

    signupBtn.disabled = true;

    // TOGGLE PASSWORD VISIBILITY
    const toggleLoginPassword = document.getElementById("toggleLoginPassword");
    const togglePassword = document.getElementById("togglePassword");
    const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

    toggleLoginPassword.addEventListener("click", () => {
        const type = loginPassword.type === "password" ? "text" : "password";
        loginPassword.type = type;
        toggleLoginPassword.classList.toggle("fa-eye-slash");
    });

    togglePassword.addEventListener("click", () => {
        const type = password.type === "password" ? "text" : "password";
        password.type = type;
        togglePassword.classList.toggle("fa-eye-slash");
    });

    toggleConfirmPassword.addEventListener("click", () => {
        const type = confirmPassword.type === "password" ? "text" : "password";
        confirmPassword.type = type;
        toggleConfirmPassword.classList.toggle("fa-eye-slash");
    });

});
