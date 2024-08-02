document.addEventListener('DOMContentLoaded', function () {
  // Mobile Navigation Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('show');
  });

  // Slideshow for Project Images
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  // Contact Form Validation
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('form-message');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (name && email && message) {
      formMessage.textContent = 'Thank you for your message!';
      formMessage.style.color = 'green';
      contactForm.reset();
    } else {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.style.color = 'red';
    }
  });

  // Dynamic Greeting Based on Time of Day
  const dynamicGreeting = document.getElementById('dynamic-greeting');
  const hours = new Date().getHours();
  let greeting;

  if (hours < 12) {
    greeting = 'Good Morning!';
  } else if (hours < 18) {
    greeting = 'Good Afternoon!';
  } else {
    greeting = 'Good Evening!';
  }

  dynamicGreeting.textContent = greeting;
});
