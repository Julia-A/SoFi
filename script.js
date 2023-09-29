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
        .then(res => {
            if (res.status !== 200) {
                // Handle error response
                throw new Error('Something went wrong');
            }
            return res.text();
        })
        .then(responseText => {
            // Success: Redirect to dashboard.html or handle success response
            location.href = '../userInfo/userInfo.html';
        })
        .catch(error => {
            // Handle any errors here
            console.error('Error:', error);
            message.textContent = 'An error occurred. Please try again later.';
        });
    });
});
