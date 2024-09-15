function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.transform = 'translateX(0)'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.transform = 'translateX(100%)'
}

function showCross() {
    const cross = document.querySelector('.cross')
    cross.style.display = 'inline'
}

function hideCross() {
    const cross = document.querySelector('.cross')
    cross.style.display = 'none'
}

