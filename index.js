const header = document.querySelector('header');

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
});

let menu= document.querySelector('#menu-icon');
let navbar = document.getElementsByClassName('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}


// const menulist =document.getElementsByClassName('navbar');
// menulist.style.maxHeight ="0px";

// function togglemenu(){
//     if(menulist.style.maxHeight =="0px")
//     {
//         menulist.style.maxHeight = "130px";
//     }
//     else{
//         menulist.style.maxHeight = "0px";
//     }
// }