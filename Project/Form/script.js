// script.js

// Get form elements
const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Error elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Validation function
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Reset error messages
  clearErrors();

  // Validate fields
  let valid = true;

  // Full Name validation
  if (fullName.value.length < 5) {
    nameError.textContent = 'Name must be at least 5 characters long.';
    valid = false;
  }

  // Email validation
  if (!email.value.includes('@')) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
  }

  // Phone Number validation
  if (phone.value === '123456789' || phone.value.length !== 10 || isNaN(phone.value)) {
    phoneError.textContent = 'Please enter a valid 10-digit phone number.';
    valid = false;
  }

  // Password validation
  const invalidPasswords = ['password', fullName.value.toLowerCase()];
  if (password.value.length < 8 || invalidPasswords.includes(password.value.toLowerCase())) {
    passwordError.textContent = 'Password must be at least 8 characters long and not too common.';
    valid = false;
  }

  // Confirm Password validation
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = 'Passwords do not match.';
    valid = false;
  }

  // Submit form if valid
  if (valid) {
    alert('Form submitted successfully!');
    form.reset(); // Clear form fields
  }
});

// Clear all error messages
function clearErrors() {
  nameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';
}
