function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

function displayData() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var event = document.getElementById('event').value;
    var message = document.getElementById('message').value.trim();

    if (!name || !email || !event || !message) {
        alert(" Please fill in all required fields!");
        return;
    }

    if (!validateEmail(email)) {
        alert(" Please enter a valid email address!");
        return;
    }

    document.getElementById('resultName').textContent = name;
    document.getElementById('resultEmail').textContent = email;
    document.getElementById('resultEvent').textContent = event;
    document.getElementById('resultMessage').textContent = message;

    document.getElementById('enquiryForm').style.display = 'none';
    document.getElementById('resultDiv').style.display = 'block';
}
