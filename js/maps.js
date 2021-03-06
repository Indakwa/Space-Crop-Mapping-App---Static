const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_hamburger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');
const logoDiv = document.querySelector('.logo-div');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        logoDiv.style.display = "none";
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
    }, 300);
}


//toggle between hiding and showing the dropdown content 
let dropdown2 = document.getElementById('dropdown2');
let dropdown3 = document.getElementById('dropdown3');

function dropdown() {
  document.getElementById("dropdown").classList.toggle("show");



  if (dropdown2.classList.contains('show') || dropdown3.classList.contains('show')) {
    dropdown2.classList.remove('show');
    dropdown3.classList.remove('show');
  }

}
function dropdown_2() {
    document.getElementById("dropdown2").classList.toggle("show");

    if (dropdown3.classList.contains('show')) {
        dropdown3.classList.remove('show');
    }
}
function dropdown_3() {

    if (dropdown2.classList.contains('show')) {
        dropdown2.classList.remove('show');
    }

    document.getElementById("dropdown3").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
/*
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("myDropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/
