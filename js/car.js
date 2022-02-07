const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_hamburger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');
const logoDiv = document.querySelector('.logo-div');
const content2 = document.querySelector('#content2');
const content1 = document.querySelector('#content1');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        content2.style.zIndex = "1";
        content1.style.zIndex = "1";
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
        content1.style.zIndex = "1";
        content2.style.zIndex = "1";
    }, 300);
}





window.direction = 1;
var counter = 0;
var numberOfItem = 5;
var offsetVal = [0,0,-28,0,18];
window.limit = (360/5) + 20;


function SetLimit (whichOne) {
    console.log("whichOne: ",whichOne);
    window.limit = (360/numberOfItem) * whichOne + offsetVal[numberOfItem - 1];
}

function TransFormObject (data) {

    var Element = document.querySelector(data.element);

    Element.style.display = "block";

    var tempScaleX, tempScaleY, tempSkeyX, tempSkeyY, tempTranslateX, tempTranslateY;

    if (data.scaleX) {tempScaleX = data.scaleX;} else { tempScaleX = 1;}
    if (data.scaleY) {tempScaleY = data.scaleY;} else { tempScaleY = 1;}
    if (data.skewX) {tempSkeyX = data.skewX;} else { tempSkeyX = 0;}
    if (data.skewY) {tempSkeyY = data.skewY;} else { tempSkeyY = 0;}
    if (data.translateX) {tempTranslateX = data.translateX;} else { tempTranslateX = 1;}
    if (data.translateY) {tempTranslateY = data.translateY;} else { tempTranslateY = 1;}

    Element.style.transform = "matrix(" + tempScaleX + 
      "," + tempSkeyY + 
      "," +  tempSkeyX + 
      "," + tempScaleY + 
      "," + tempTranslateX + 
      "," + tempTranslateY + ")"; 

    var tempZval = Math.floor(data.scaleY * numberOfItem);
    Element.style.zIndex = tempZval;

}


function getTranslateValue (data) {
    var calculatedData = {};
    calculatedData.x = data.xpos + (data.radiusX * Math.cos(data.angle * Math.PI/180) );
    calculatedData.y = data.ypos + (data.radiusY * Math.sin(data.angle * Math.PI/180) );
    return calculatedData;
}



if ( $(window).width() > 1300) {   //Add your javascript for larger screens here   
    function Animate () {

        for (var i = 0; i < numberOfItem; i++) {
    
            var BoxValue = getTranslateValue({
                "xpos"      : 455, //455
                "ypos"      : 400, //400
                "angle"     : counter + i * (360 / numberOfItem),
                "radiusX"   : 310, //285
                "radiusY"   : 70 //70
            });
            
            TransFormObject ({
                "element"       :   "#box" + Number(i + 1),
                "scaleX"        :   (BoxValue.y - 140)/200,
                "scaleY"        :   (BoxValue.y - 140)/200,
                "skewX"         :   0,
                "skewY"         :   0,
                "translateX"    :   BoxValue.x,
                "translateY"    :   BoxValue.y,
            });
    
        }
    
        if (window.direction > 0) {
            counter++;
            if (counter < window.limit   ) { window.requestAnimationFrame(Animate); }
            else { window.cancelAnimationFrame(Animate);}
    
        }
        else {
            counter--;
            if (counter > window.limit   ) { window.requestAnimationFrame(Animate); }
            else { window.cancelAnimationFrame(Animate);}
        }
    
    }
  }
  else if( $(window).width() < 1300 && $(window).width() > 900 ) {   //Add your javascript for large screens here   
    function Animate () {

        for (var i = 0; i < numberOfItem; i++) {
    
            var BoxValue = getTranslateValue({
                "xpos"      : 355, //455
                "ypos"      : 400, //400
                "angle"     : counter + i * (360 / numberOfItem),
                "radiusX"   : 240, //285
                "radiusY"   : 70 //70
            });
            
            TransFormObject ({
                "element"       :   "#box" + Number(i + 1),
                "scaleX"        :   (BoxValue.y - 140)/200,
                "scaleY"        :   (BoxValue.y - 140)/200,
                "skewX"         :   0,
                "skewY"         :   0,
                "translateX"    :   BoxValue.x,
                "translateY"    :   BoxValue.y,
            });
    
        }
    
        if (window.direction > 0) {
            counter++;
            if (counter < window.limit   ) { window.requestAnimationFrame(Animate); }
            else { window.cancelAnimationFrame(Animate);}
    
        }
        else {
            counter--;
            if (counter > window.limit   ) { window.requestAnimationFrame(Animate); }
            else { window.cancelAnimationFrame(Animate);}
        }
    
    }
  }
  else if( $(window).width() < 900 && $(window).width() > 738 ) {   //Add your javascript for large screens here   
    function Animate () {

        for (var i = 0; i < numberOfItem; i++) {
    
            var BoxValue = getTranslateValue({
                "xpos"      : 355, //455
                "ypos"      : 400, //400
                "angle"     : counter + i * (360 / numberOfItem),
                "radiusX"   : 240, //285
                "radiusY"   : 70 //70
            });
            
            TransFormObject ({
                "element"       :   "#box" + Number(i + 1),
                "scaleX"        :   (BoxValue.y - 140)/200,
                "scaleY"        :   (BoxValue.y - 140)/200,
                "skewX"         :   0,
                "skewY"         :   0,
                "translateX"    :   BoxValue.x,
                "translateY"    :   BoxValue.y,
            });
    
        }
    
        if (window.direction > 0) {
            counter++;
            if (counter < window.limit   ) { window.requestAnimationFrame(Animate); }
            else { window.cancelAnimationFrame(Animate);}
    
        }
        else {
            counter--;
            if (counter > window.limit   ) { window.requestAnimationFrame(Animate); }
            else { window.cancelAnimationFrame(Animate);}
        }
    
    }
  }
  else {  //Add your javascript for small screens here 
    function Animate () {

        for (var i = 0; i < numberOfItem; i++) {
    
            var BoxValue = getTranslateValue({
                "xpos"      : 123,
                "ypos"      : 400,
                "angle"     : counter + i * (360 / numberOfItem),
                "radiusX"   : 150, 
                "radiusY"   : 50
            });
            
            TransFormObject ({
                "element"       :   "#box" + Number(i + 1),
                "scaleX"        :   (BoxValue.y - 140)/200,
                "scaleY"        :   (BoxValue.y - 140)/200,
                "skewX"         :   0,
                "skewY"         :   0,
                "translateX"    :   BoxValue.x,
                "translateY"    :   BoxValue.y,
            });
    
        }
    
        if (window.direction > 0) {
            counter++;
            if (counter < window.limit   ) { window.requestAnimationFrame(Animate); }
            else { window.cancelAnimationFrame(Animate);}
    
        }
        else {
            counter--;
            if (counter > window.limit   ) { window.requestAnimationFrame(Animate); }
            else { window.cancelAnimationFrame(Animate);}
        }
    
    }
  }



Animate ();

var currentOne = 1;

document.getElementById("prev").addEventListener("click", function(){
    console.log("prev");
    currentOne--;
    window.direction = -1;

    SetLimit(currentOne);
    Animate ();
})

document.getElementById("next").addEventListener("click", function(){
    console.log("next");

    currentOne++;
    window.direction = 1;
    SetLimit(currentOne);
    Animate ();

})



setInterval(function () {
    currentOne++;
    window.direction = 1;
    SetLimit(currentOne);
    Animate ();
}, 5000);