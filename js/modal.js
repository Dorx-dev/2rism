document.getElementById("openModal1").addEventListener("click",function(){
    document.getElementById("modal1").classList.add("open")
});

document.getElementById("closeModal1").addEventListener("click",function(){
    document.getElementById("modal1").classList.remove("open")
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
});

document.getElementById("closeModal2").addEventListener("click",function(){
    document.getElementById("modal2").classList.remove("open")
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


/**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://2rism-main.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();
