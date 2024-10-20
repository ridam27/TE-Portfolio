document.addEventListener('DOMContentLoaded', function () {
    // Get the 'name' from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const studentName = decodeURIComponent(urlParams.get('name'));

    // Fetch the student data from the Google Sheets via Apps Script
    fetch('https://script.google.com/macros/s/AKfycbyhhgkOzi4IaTCwhZFYGbfKHyN1VG-_rGwfEKwofUNwDYUE61hx3Ijb889VwpJCHjDalQ/exec') // Replace with your Google Apps Script URL
        .then(response => response.json())
        .then(data => {
            // Find the student based on the name
            const student = data.find(s => s.name === studentName);

            if (student) {
                const portfolio = document.getElementById('portfolio');
                portfolio.innerHTML = `
    <h1>${student.name}'s Portfolio</h1>
    <img src="${student.photo}" alt="${student.name}">
    <div class="info">
        <p><strong>Post:</strong> ${student.post}</p>
        <p><strong>Degree:</strong> ${student.degree}</p>
    </div>
    <div class="skills">
        <strong>Skills:</strong> 
        ${student.skills.map(skill => `<span>${skill}</span>`).join('')}
    </div>
    <div class="projects">
        <strong>Projects:</strong> 
        ${student.projects.map(project => `<span>${project}</span>`).join('')}
    </div>
`;
            } else {
                document.getElementById('portfolio').innerHTML = '<p>Student not found.</p>';
            }
        })
        .catch(error => console.error('Error loading student data:', error));
});
