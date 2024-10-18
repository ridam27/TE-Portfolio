// script.js

document.querySelectorAll('#projects a').forEach(project => {
    project.addEventListener('click', function(event) {
        alert('You clicked on ' + event.target.innerText);
    });
});
