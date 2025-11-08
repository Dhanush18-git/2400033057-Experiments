document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("regForm");
    const fields = [
        { id: "name", validate: (v) => v.trim() !== "", msg: "Name required" },
        { id: "email", validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: "Invalid email" },
        { id: "password", validate: (v) => v.length >= 6 && /[^A-Za-z0-9]/.test(v), msg: "Password must be 6+ chars and use a special character" },
        { id: "phone", validate: (v) => /^[0-9]{10}$/.test(v), msg: "Phone must be 10 digits" }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorSpan = input.parentElement.querySelector('.error');
        input.addEventListener('input', () => {
            if (field.validate(input.value)) {
                errorSpan.textContent = "";
                input.style.borderColor = "#81c784";
            } else {
                errorSpan.textContent = field.msg;
                input.style.borderColor = "#e57373";
            }
        });
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let allValid = true;
        fields.forEach(field => {
            const input = document.getElementById(field.id);
            const errorSpan = input.parentElement.querySelector('.error');
            if (!field.validate(input.value)) {
                errorSpan.textContent = field.msg;
                input.style.borderColor = "#e57373";
                allValid = false;
            } else {
                errorSpan.textContent = "";
                input.style.borderColor = "#81c784";
            }
        });
        const successMsg = document.getElementById("successMsg");
        if (allValid) {
            successMsg.textContent = "Registration successful!";
            form.reset();
            setTimeout(() => successMsg.textContent = "", 2000);
        } else {
            successMsg.textContent = "";
        }
    });
});
