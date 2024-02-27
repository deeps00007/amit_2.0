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


let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})