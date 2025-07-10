// main.js - shared navigation logic for all pages

document.addEventListener('DOMContentLoaded', () => {
  // Splash screen logic
  const splash = document.getElementById('splash');
  const login = document.getElementById('login');
  const otp = document.getElementById('otp');
  if (splash && login && otp) {
    setTimeout(() => {
      splash.style.display = 'none';
      login.style.display = 'flex';
    }, 2000);
    // Login form logic
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const mobile = document.getElementById('mobile').value;
      if (/^\d{10}$/.test(mobile)) {
        login.style.display = 'none';
        otp.style.display = 'flex';
      } else {
        alert('Please enter a valid 10-digit mobile number.');
      }
    });
    // OTP form logic (dummy)
    const otpForm = document.getElementById('otp-form');
    otpForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const otpInput = document.getElementById('otp-input').value;
      if (/^\d{4}$/.test(otpInput)) {
        window.location.href = 'allinternet.html';
      } else {
        alert('Please enter a valid 4-digit OTP.');
      }
    });
    // Resend logic (dummy)
    document.getElementById('resend').addEventListener('click', function() {
      alert('OTP resent (dummy).');
    });
    return; // Skip nav logic if on login page
  }
  // Highlight the active nav button based on current page
  const navLinks = document.querySelectorAll('.bottom-nav .nav-btn');
  const path = window.location.pathname;
  navLinks.forEach(link => {
    if (link.getAttribute('href') && path.endsWith(link.getAttribute('href'))) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
  // Optionally, handle menu button (expand for mobile, etc.)
  const menuBtn = document.querySelector('.menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      alert('Menu button clicked! (Add menu logic here)');
    });
  }
}); 