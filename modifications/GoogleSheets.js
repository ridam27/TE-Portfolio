document.getElementById('student-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const studentData = {};

    formData.forEach((value, key) => {
        studentData[key] = value;
    });

    // Send the form data to Google Sheets
    fetch('https://script.google.com/macros/s/AKfycbw6ViY0da7GQsuPNZvVRryqaP70uwo7bMmHb7fdIOD7AJFRK2m-GMn16lYjWoC0isKp/exec', {
        method: 'POST',
        body: new URLSearchParams(studentData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Data submitted successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
});