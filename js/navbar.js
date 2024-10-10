function menubar() {
    var menu = document.querySelector('.menu-data');
    if (menu) {
        menu.classList.add('show');
    }
}

function closebar() {
    var menu = document.querySelector('.menu-data');
    if (menu) {
        menu.classList.remove('show');
    }
}
