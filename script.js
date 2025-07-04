window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
    const loginPassword = document.getElementById("login-password");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const warning = document.getElementById("password-warning");
    const checkbox = document.getElementById("terms-checkbox");
    const signupBtn = document.getElementById("signup-btn");

    function validateForm() {
        if (password.value !== confirmPassword.value) {
            warning.style.visibility = "visible";
            return false;
        }
        warning.style.visibility = "hidden";
        return true;
    }

    confirmPassword.addEventListener("input", () => {
        if (password.value !== confirmPassword.value) {
            warning.style.visibility = "visible";
        } else {
            warning.style.visibility = "hidden";
        }
    });

    checkbox.addEventListener("change", () => {
        signupBtn.disabled = !checkbox.checked;
    });
    const toggleLoginPassword = document.getElementById("toggleLoginPassword");
    const togglePassword = document.getElementById("togglePassword");
    const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
    toggleLoginPassword.addEventListener("click", () => {
        const type = loginPassword.getAttribute("type") === "password" ? "text" : "password";
        loginPassword.setAttribute("type", type);
        toggleLoginPassword.classList.toggle("fa-eye-slash");
    });
    togglePassword.addEventListener("click", () => {
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        togglePassword.classList.toggle("fa-eye-slash");
    });

    toggleConfirmPassword.addEventListener("click", () => {
        const type = confirmPassword.getAttribute("type") === "password" ? "text" : "password";
        confirmPassword.setAttribute("type", type);
        toggleConfirmPassword.classList.toggle("fa-eye-slash");
    });

    // Optional: prevent sign-up if checkbox unchecked
    signupBtn.disabled = !checkbox.checked;
});

