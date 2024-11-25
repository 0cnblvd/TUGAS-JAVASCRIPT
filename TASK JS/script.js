function submitForm() {
    const name = document.getElementById("Name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Name and Email are required!");
        return; 
    }

    alert("Form submitted!");
}

function resetForm() {
    document.getElementById("WorkshopRegistration").reset();
}