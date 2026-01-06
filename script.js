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

    const loginPassword = document.getElementById("login-password");
    const password = document.getElementById("signup-password");
    const confirmPassword = document.getElementById("confirm-password");
    const warning = document.getElementById("password-warning");
    const checkbox = document.getElementById("terms-checkbox");
    const signupBtn = document.getElementById("signup-btn");

    // Password match check
    confirmPassword.addEventListener("input", () => {
        warning.style.visibility =
            password.value !== confirmPassword.value ? "visible" : "hidden";
    });

    // Enable signup only if terms accepted
    checkbox.addEventListener("change", () => {
        signupBtn.disabled = !checkbox.checked;
    });
    signupBtn.disabled = true;

    // Toggle password visibility
    document.getElementById("toggleLoginPassword").addEventListener("click", () => {
        loginPassword.type =
            loginPassword.type === "password" ? "text" : "password";
    });

    document.getElementById("togglePassword").addEventListener("click", () => {
        password.type =
            password.type === "password" ? "text" : "password";
    });

    document.getElementById("toggleConfirmPassword").addEventListener("click", () => {
        confirmPassword.type =
            confirmPassword.type === "password" ? "text" : "password";
    });

});
