// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

if (mobileMenu && navList) {
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

// Fade-in effect for sections and images
const fadeElements = document.querySelectorAll('.fade-in, .section-image');
const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add a class to trigger the animation
            observer.unobserve(entry.target);
        }
    });
}, options);

fadeElements.forEach(element => {
    observer.observe(element);
});

// Select all FAQ questions
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling; // Get the corresponding answer

        // Toggle the 'show' class on the answer
        answer.classList.toggle('show');
    });
});


// Function to scroll to the top of the page
//function scrollToTop() {
   // window.scrollTo({
   //     top: 0,
   //     behavior: 'smooth' // Smooth scrolling
   // });
//}

// Function to scroll to the bottom of the page
//function scrollToBottom() {
    //window.scrollTo({
       // top: document.body.scrollHeight,
        //behavior: 'smooth' // Smooth scrolling
    //});
//}

// Show the popup when the user scrolls down 300 pixels
//window.onscroll = function() {
   // const arrowUp = document.getElementById("arrowUp");
    //const arrowDown = document.getElementById("arrowDown");

    // Always show the up arrow
   // arrowUp.style.display = "block"; // Show the up arrow

    // Always show the down arrow
   // arrowDown.style.display = "block"; // Show the down arrow

    // Show the popup when the user scrolls down 300 pixels
   // if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
       // showPopup();
    //}
//};



// Function to open an image in a popup
function openImagePopup() {
    const imageUrl = 'Image C.jpg'; // URL of the image to pop out
    const popupWindow = window.open(imageUrl, 'Image Popup', 'width=800,height=600');
    popupWindow.focus(); // Bring the new window to the front
}

//scroll onTopand bottom final correction

function scrollToTop() {
    // Scroll to the top of the page smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToBottom() {
    // Scroll to the bottom of the page smoothly
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

// Show the popup when the user scrolls down 300 pixels
//popup mailer-
 // Show the popup when the page loads or when the subscribe button is clicked
 function openModal() {
    document.getElementById("subscribeModal").style.display = "flex";
}

// Close the popup
function closeModal() {
    document.getElementById("subscribeModal").style.display = "none";
}

// Handle form submission
function confirmSubscription() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    // Here, you can add your code to handle the email subscription (e.g., send it to a server)
    console.log('Email subscribed:', email); // For demonstration, log the email

    // Close the modal after submission
    closeModal();
    alert('Thank you for subscribing!'); // Show a thank you message
}

//blogroll
// Function to automatically slide the carousel
let currentIndex = 0;
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');

function slideCarousel() {
    currentIndex++;
    if (currentIndex >= items.length / 3) {
        currentIndex = 0; // Reset to the start
    }
    carouselInner.style.transform = `translateX(-${currentIndex * 33.33}%)`;
}

setInterval(slideCarousel, 3000); // Change slide every 3 seconds



e 