// JavaScript File: magneticbuttons.js

document.addEventListener('DOMContentLoaded', function () {
    const magnetButton = document.querySelector('.magnet-button');
    const magneticArea = document.querySelector('.magnetic');

    magneticArea.addEventListener('mousemove', function (e) {
        const magneticAreaRect = magneticArea.getBoundingClientRect();
        const mouseX = e.clientX - magneticAreaRect.left;
        const mouseY = e.clientY - magneticAreaRect.top;

        const centerX = magneticAreaRect.width / 2;
        const centerY = magneticAreaRect.height / 2;

        const deltaX = (mouseX - centerX) * 0.3;
        const deltaY = (mouseY - centerY) * 0.3;

        magnetButton.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });

    magneticArea.addEventListener('mouseleave', function () {
        magnetButton.style.transform = `translate(0px, 0px)`;
    });
});
