const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_hamburger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');
const logoDiv = document.querySelector('.logo-div');
const options = document.querySelector('.options');

let drop1 = document.getElementById('drop1');
let drop2 = document.getElementById('drop2');
let drop3 = document.getElementById('drop3');
let drop4 = document.getElementById('drop4');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        logoDiv.style.display = "none";
        options.style.zIndex = "1";
        drop1.style.zIndex = "1";
        drop2.style.zIndex = "1";
        drop3.style.zIndex = "1";
        drop4.style.zIndex = "1";
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    }else{
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showLogo();
        showMenu = false;
    }
}

function showLogo(){
    setTimeout(() => {       
        logoDiv.style.display = "block";
        options.style.zIndex = "11";
        drop1.style.zIndex = "11";
        drop2.style.zIndex = "11";
        drop3.style.zIndex = "11";
        drop4.style.zIndex = "11";
    }, 300);
}





//toggle between hiding and showing the dropdown content 


function myDrop1() {
  drop1.classList.toggle("show");

    if (drop2.classList.contains('show') || drop3.classList.contains('show') || drop4.classList.contains('show')) {
        drop2.classList.remove('show');
        drop3.classList.remove('show');
        drop4.classList.remove('show');
    }
}

function myDrop2() {
    drop2.classList.toggle("show");

    if (drop1.classList.contains('show') || drop3.classList.contains('show') || drop4.classList.contains('show')) {
        drop1.classList.remove('show');
        drop3.classList.remove('show');
        drop4.classList.remove('show');
    }
}

function myDrop3() {
    drop3.classList.toggle("show");

    if (drop2.classList.contains('show') || drop1.classList.contains('show') || drop4.classList.contains('show')) {
        drop2.classList.remove('show');
        drop1.classList.remove('show');
        drop4.classList.remove('show');
    }
}

function myDrop4() {
    drop4.classList.toggle("show");

    if (drop2.classList.contains('show') || drop3.classList.contains('show') || drop1.classList.contains('show')) {
        drop2.classList.remove('show');
        drop3.classList.remove('show');
        drop1.classList.remove('show');
    }
}
  
  
  