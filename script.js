// script.js

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // You can add your own code here to handle the form submission, like sending it to a server or displaying a confirmation message.
    alert('Form submitted!'); // For demonstration purposes, just display an alert
});
// Add this JavaScript code in a <script> tag or in an external JavaScript file

let currentIndex = 0;
const services = document.querySelectorAll('.service');
const totalSlides = services.length;
const dots = document.querySelectorAll('.dot');

function showService(index) {
    services.forEach((service, i) => {
        if (i === index) {
            service.style.display = 'block';
            dots[i].classList.add('active');
        } else {
            service.style.display = 'none';
            dots[i].classList.remove('active');
        }
    });
}

function nextService() {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    showService(currentIndex);
}

// Show the first service initially
showService(currentIndex);

// Set interval for automatic slider
setInterval(nextService, 3000); // Change slide every 3 seconds




let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

// floating Whatsapp
$(function () {
    $('#myDiv').floatingWhatsApp({
        phone: '+917217667887',
        showPopup: 'true',
        popupMessage: "Hello sir ",
        HeaderTitle: "Whatsapp Chat",
        position: 'right',
    });
});