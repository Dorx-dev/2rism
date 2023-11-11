document.getElementById("openModal1").addEventListener("click",function(){
    document.getElementById("modal1").classList.add("open")
    document.body.style.overflow = 'hidden';
});

document.getElementById("closeModal1").addEventListener("click",function(){
    document.getElementById("modal1").classList.remove("open")
    document.body.style.overflow = 'auto';
});

window,addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal1").classList.remove("open")
    }
});

document.querySelector("#modal1 .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal1").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
})






document.getElementById("openModal2").addEventListener("click",function(){
    document.getElementById("modal2").classList.add("open")
    document.body.style.overflow = 'hidden';
});

document.getElementById("closeModal2").addEventListener("click",function(){
    document.getElementById("modal2").classList.remove("open")
    document.body.style.overflow = 'auto';
});

window,addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal2").classList.remove("open")
    }
});

document.querySelector("#modal2 .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal2").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
})
