document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const message = document.getElementById('message');

    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting the traditional way

        // Capture form data
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Create a data object with the form values
        const formData = {
            fullName,
            email,
            password
        };

        // Send the data to the backend using a POST request
        fetch('https://sound-fi.onrender.com/users/new-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Set the content type to JSON
            },
            body: JSON.stringify(formData) // Convert the data to JSON format
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the backend
            if (data.success) {
                message.textContent = 'Registration successful';
                registrationForm.reset();
            } else {
                message.textContent = 'Registration failed. Please try again.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            message.textContent = 'An error occurred. Please try again later.';
        });
    });
});
