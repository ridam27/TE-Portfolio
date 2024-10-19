document.addEventListener('DOMContentLoaded', function() {
    fetch('https://script.google.com/macros/s/AKfycbyhhgkOzi4IaTCwhZFYGbfKHyN1VG-_rGwfEKwofUNwDYUE61hx3Ijb889VwpJCHjDalQ/exec') // Replace with your web app URL
        .then(response => response.json())
        .then(data => {
            const grid = document.getElementById('portfolio-grid');
            data.forEach(student => {
                const card = document.createElement('div');
                card.classList.add('card');
                
                card.innerHTML = `
                    <img src="${student.photo}">
                    <h2>${student.name}</h2>
                    <p> ${student.post}</p>
                    <p> ${student.degree}</p>
                    <br>
                    <div class="skills"><strong>Skills:</strong> 
                        ${student.skills.map(skill => `<span>${skill}</span>`).join('')}
                    </div>
                    <div class="projects"><strong>Projects:</strong> 
                        ${student.projects.map(project => `<span>${project}</span>`).join('')}
                    </div>
                `;
                
                grid.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading student data:', error));
});
