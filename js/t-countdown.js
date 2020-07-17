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
  setTimeout(showSlides, 3000); // Change image every 2 seconds
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
 
  setTimeout(showSlid, 3000); // Change image every 2 seconds
}

// text show 
// var slideIndex1 = 0;
// showSlides1();

// function showSlides1() {
//   var i;
//   var slides1 = document.getElementsByClassName("stays");
//   var dots1 = document.getElementsByClassName("move1");
//   for (i = 0; i < slides1.length; i++) {
//     slides1[i].style.display = "none";  
//   }
//   slideIndex1++;
//   if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
//   for (i = 0; i < dots1.length; i++) {
//     dots1[i].className = dots1[i].className.replace(" active", "");
//   }
//   slides1[slideIndex1-1].style.display = "none";  
//   dots1[slideIndex1-1].className += " active";
//   setTimeout(showSlides1, 2000); // Change image every 2 seconds
// }

