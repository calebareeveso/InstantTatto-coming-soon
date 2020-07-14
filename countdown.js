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
  <div><span class="num">${mins}</span><span>Min</span></div>
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
