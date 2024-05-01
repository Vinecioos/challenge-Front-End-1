function menuShow() {
    let menuMobile = document.getElementById('menuMobile');
    if (menuMobile.style.display == 'block') {
        menuMobile.style.display = 'none';
        document.querySelector(".menuHamburguer").src ="assets/menuHamburguerClose.png"
    } else {
        menuMobile.style.display = 'block';
        document.querySelector(".menuHamburguer").src ="assets/menuHamburguerClose.png"
    }
}
