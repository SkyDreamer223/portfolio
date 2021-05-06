document.addEventListener("DOMContentLoaded", (e)=>{
    let hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", ()=>{
        console.log("click")
        document.querySelector(".sidebar").classList.toggle("show-menu");
        hamburger.classList.toggle("show-menu");
    })
});