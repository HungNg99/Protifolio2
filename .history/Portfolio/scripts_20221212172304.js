const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 100);
})
let menu = document.querySelector("#menu-icon");
let navList = document.querySelector(".nav-list");

menu.addEventListener("click", function(e){
    e.target.classList.toggle("open");
    console.log(e.target);
})
navList.addEventListener("click", function(e){
    e.target.classList.toggle("bx-x");
})
//khi scroll thì bị ẩn tab
window.onscroll = () => {
    menu.classList.remove("bx-x");
    navList.classList.remove("open");
    
}