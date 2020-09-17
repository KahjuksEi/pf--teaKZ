
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 53.909711, lng: 27.491481},
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: {lat: 53.909711, lng: 27.491481},
        map: map,
        title: 'Чай из Казахстана'
    });
} 


toTop = document.getElementById("toTop");

if(typeof(toTop) != 'undefined' && checker != null){
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      toTop.style.display = "block";
    } else {
      toTop.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}


var navMenu = document.getElementById('navMenu');
var mobileOpenBtn = document.getElementById('mobileOpenBtn');
var mobileCloseBtn = document.getElementById('mobileCloseBtn');
function openMenu(){
    navMenu.style.display = 'block';
    mobileCloseBtn.style.display = 'block';
    mobileOpenBtn.style.display = 'none';
}
function closeMenu(){
    navMenu.style.display = 'none';
    mobileCloseBtn.style.display = 'none';
    mobileOpenBtn.style.display = 'block';
}

var checker = document.getElementById('checkMe');
var submitBtn = document.getElementById('submitBtn');
if(typeof(checker) != 'undefined' && checker != null){
    checker.onchange = function() {
        submitBtn.disabled = !this.checked;
    };
}

var arr1 = document.getElementById('arr1');
var cb1 = document.getElementById('cb1');
var arr2 = document.getElementById('arr2');
var cb2 = document.getElementById('cb2');
var arr3 = document.getElementById('arr3');
var cb3 = document.getElementById('cb3');
var arr4 = document.getElementById('arr4');
var cb4 = document.getElementById('cb4');
function ShowCont1() {
    cb1.classList.toggle("cont-visible");
    arr1.classList.toggle("rotate");
  }
function ShowCont2() {
  cb2.classList.toggle("cont-visible");
  arr2.classList.toggle("rotate");
}
function ShowCont3() {
  cb3.classList.toggle("cont-visible");
  arr3.classList.toggle("rotate");
}
function ShowCont4() {
  cb4.classList.toggle("cont-visible");
  arr4.classList.toggle("rotate");
}

var popupWpapper = document.querySelector('.popup__wrapper');
function closePopup(){
    popupWpapper.style.display = 'none';
}