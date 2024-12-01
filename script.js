// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// form validation
// Select the form
const form = document.querySelector('form');

// Form validation function
function validateForm(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get form values
  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector('textarea').value.trim();

  // Clear any previous error messages
  const errorMessages = form.querySelectorAll('.error');
  errorMessages.forEach(error => error.remove());

  // Flag for validation status
  let isValid = true;

  // Validate Name
  if (name === '') {
    displayError(form.querySelector('input[type="text"]'), "Name is required.");
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.match(emailPattern)) {
    displayError(form.querySelector('input[type="email"]'), "Enter a valid email address.");
    isValid = false;
  }

  // Validate Message
  if (message === '') {
    displayError(form.querySelector('textarea'), "Message cannot be empty.");
    isValid = false;
  }

  // If valid, display success message or submit form
  if (isValid) {
    alert("Form submitted successfully!");
    form.reset(); // Reset form fields
  }
}

// Helper function to display error messages
function displayError(input, message) {
  const errorDiv = document.createElement('div');
  errorDiv.textContent = message;
  errorDiv.classList.add('error');
  errorDiv.style.color = 'red';
  errorDiv.style.marginTop = '5px';
  input.parentElement.appendChild(errorDiv);
}

// Attach the validation function to the form submit event
form.addEventListener('submit', validateForm);


