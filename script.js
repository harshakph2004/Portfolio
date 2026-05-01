// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    const emailInput = document.getElementById("email");
    const errorText = document.getElementById("email-error");

    emailInput.addEventListener("input", function () {
        const emailValue = emailInput.value;

        if (!emailValue.includes("@") || !emailValue.includes(".")) {
            errorText.textContent = "Please enter a valid email";
            emailInput.classList.add("input-error");
        } else {
            errorText.textContent = "";
            emailInput.classList.remove("input-error");
        }
    });

});