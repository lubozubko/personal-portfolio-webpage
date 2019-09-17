// navbar menu button
function classToggle() {
    const navs = document.querySelectorAll('.nav-list')

    navs.forEach(nav => nav.classList.toggle('nav-toggle-show'));
}

document.querySelector('.nav-links-toggle')
    .addEventListener('click', classToggle);