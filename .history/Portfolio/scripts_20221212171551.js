const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 100);
})
let menu = document.querySelector("#menu-icon");
let navList = document.querySelector(".nav-list");

menu.addEventListener("click", function(e){
    const ClickMenu = e.target;
    ClickMenu.classList.toggle("bx x");
})
navList.addEventListener("click", function(e){
    const ClickNavList = e.target;
    ClickNavList.classList.toggle("open");
})
//khi scroll thì bị ẩn tab
window.onscroll = () => {
    ClickMenu.classList.remove("bx x");
    ClickNavList.classList.remove("open");
    
}