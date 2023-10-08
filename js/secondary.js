const inputSubscribe = document.querySelector('.subscribe__input');
const label = document.querySelector('.subscribe__label');
inputSubscribe.addEventListener('input', ()=> {
    if (inputSubscribe.value.trim() !== '') {
        label.classList.add('.subscribe__label--top');
    } else {
        label.classList.remove('.subscribe__label--top');
    }
});

const navBtn = document.querySelector('.mobile-nav-btn');
const nav = document.querySelector('.mobile-nav');
const menuIcon = document.querySelector('.nav-icon');
const fade = document.querySelector('.mobile-nav-fade');

navBtn.onclick = function () {
    nav.classList.toggle('mobile-nav--open');
    fade.classList.toggle('mobile-nav-fade--open');
    menuIcon.classList.toggle('nav-icon--active');
    document.body.classList.toggle('no-scroll');
}

fade.onclick = function () {
    nav.classList.toggle('mobile-nav--open');
    fade.classList.toggle('mobile-nav-fade--open');
    menuIcon.classList.toggle('nav-icon--active');
    document.body.classList.toggle('no-scroll');
}