const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");

const mobile_menu  = document.querySelector(".header .nav-bar .nav-list ul");

const menu_item  = document.querySelectorAll(".header .nav-bar .nav-list ul li a");

const header  = document.querySelector(".header.container");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll",()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "crimson";
    }else{
        header.style.backgroundColor = "transparent";
    }
})

menu_item.forEach((item) => {
    item.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobile_menu.classList.toggle("active");
    });
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
if (n > slides.length) {slideIndex = 1} 
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
}
slides[slideIndex-1].style.display = "block"; 
dots[slideIndex-1].className += " active";
}


document.getElementById("myButtonn").onclick = function()
{
    document.getElementById("container").addEventListener("transitionend", myFunction);
}

function myFunction() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myButton");
    var dots = document.getElementById("dots");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction2() {
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myButton2");
    var dots = document.getElementById("dots2");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction3() {
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myButton3");
    var dots = document.getElementById("dots3");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction4() {
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myButton4");
    var dots = document.getElementById("dots4");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction5() {
    var moreText = document.getElementById("more5");
    var btnText = document.getElementById("myButton5");
    var dots = document.getElementById("dots5");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction6() {
    var moreText = document.getElementById("more6");
    var btnText = document.getElementById("myButton6");
    var dots = document.getElementById("dots6");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction7() {
    var moreText = document.getElementById("more7");
    var btnText = document.getElementById("myButton7");
    var dots = document.getElementById("dots7");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction8() {
    var moreText = document.getElementById("more8");
    var btnText = document.getElementById("myButton8");
    var dots = document.getElementById("dots8");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction9() {
    var moreText = document.getElementById("more9");
    var btnText = document.getElementById("myButton9");
    var dots = document.getElementById("dots9");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction10() {
    var moreText = document.getElementById("more10");
    var btnText = document.getElementById("myButton10");
    var dots = document.getElementById("dots10");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction11() {
    var moreText = document.getElementById("more11");
    var btnText = document.getElementById("myButton11");
    var dots = document.getElementById("dots11");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction12() {
    var moreText = document.getElementById("more12");
    var btnText = document.getElementById("myButton12");
    var dots = document.getElementById("dots12");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction13() {
    var moreText = document.getElementById("more13");
    var btnText = document.getElementById("myButton13");
    var dots = document.getElementById("dots13");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}


function myFunction14() {
    var moreText = document.getElementById("more14");
    var btnText = document.getElementById("myButton14");
    var dots = document.getElementById("dots14");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction15() {
    var moreText = document.getElementById("more15");
    var btnText = document.getElementById("myButton15");
    var dots = document.getElementById("dots15");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction16() {
    var moreText = document.getElementById("more16");
    var btnText = document.getElementById("myButton16");
    var dots = document.getElementById("dots16");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction17() {
    var moreText = document.getElementById("more17");
    var btnText = document.getElementById("myButton17");
    var dots = document.getElementById("dots17");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction18() {
    var moreText = document.getElementById("more18");
    var btnText = document.getElementById("myButton18");
    var dots = document.getElementById("dots18");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction19() {
    var moreText = document.getElementById("more19");
    var btnText = document.getElementById("myButton19");
    var dots = document.getElementById("dots19");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction20() {
    var moreText = document.getElementById("more20");
    var btnText = document.getElementById("myButton20");
    var dots = document.getElementById("dots20");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction21() {
    var moreText = document.getElementById("more21");
    var btnText = document.getElementById("myButton21");
    var dots = document.getElementById("dots21");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction22() {
    var moreText = document.getElementById("more22");
    var btnText = document.getElementById("myButton22");
    var dots = document.getElementById("dots22");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction23() {
    var moreText = document.getElementById("more23");
    var btnText = document.getElementById("myButton23");
    var dots = document.getElementById("dots23");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction24() {
    var moreText = document.getElementById("more24");
    var btnText = document.getElementById("myButton24");
    var dots = document.getElementById("dots24");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction25() {
    var moreText = document.getElementById("more25");
    var btnText = document.getElementById("myButton25");
    var dots = document.getElementById("dots25");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction26() {
    var moreText = document.getElementById("more26");
    var btnText = document.getElementById("myButton26");
    var dots = document.getElementById("dots26");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction27() {
    var moreText = document.getElementById("more27");
    var btnText = document.getElementById("myButton27");
    var dots = document.getElementById("dots27");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction28() {
    var moreText = document.getElementById("more28");
    var btnText = document.getElementById("myButton28");
    var dots = document.getElementById("dots28");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction29() {
    var moreText = document.getElementById("more29");
    var btnText = document.getElementById("myButton29");
    var dots = document.getElementById("dots29");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

function myFunction30() {
    var moreText = document.getElementById("more30");
    var btnText = document.getElementById("myButton30");
    var dots = document.getElementById("dots30");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}