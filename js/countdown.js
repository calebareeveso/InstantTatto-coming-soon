const countdown = document.querySelector('.countdown');
const countdown2 = document.querySelector('.countdown-2');
const countdown3 = document.querySelector('.countdown-3');
const countdown4 = document.querySelector('.countdown-4');
// Set Launch Date (ms)
const launchDate = new Date('Jan 1, 2023 1:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
  // Get todays date and time (ms)
  const now = new Date().getTime();

  // Distance from now and the launch date (ms)
  const distance = launchDate - now;

  // Time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
  <div><span class="num">${days}</span><span>Days</span></div> 
  <div><span class="num">${hours}</span><span>Hours</span></div>
  <div><span class="num">${mins}</span><span>Mins</span></div>
  <div><span class="num">${seconds}</span><span>Secs</span></div>
  `;

  // If launch date is reached
  if (distance < 0) {
    // Stop countdown
    clearInterval(intvl);
    // Style and output text
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched!';
  }
}, 1000);

// slide show 
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
      
      slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  

  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}

// slide show 2
var slideInde = 0;
showSlid();

function showSlid() {
  var i;
  var slide = document.getElementsByClassName("mu-1");
 
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none"; 
   
  }
  slideInde++;
  if (slideInde > slide.length) {slideInde = 1}    
 
  slide[slideInde-1].style.display = "block";  
 
  setTimeout(showSlid, 6000); // Change image every 2 seconds
}

setTimeout(function myload() {
  var logo = document.querySelector(".logo")
  var pxy = document.querySelector(".pxy")
  var bred = document.querySelector(".bred")
  var opa = document.querySelector(".opa")

  logo.style.opacity = "1";
  opa.style.opacity = "1";
  bred.style.opacity = "1";
  pxy.style.opacity = "1";
}, 1000);