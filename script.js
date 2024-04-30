'use strict';
/*
// Get all the 'Show modal' buttons, modals, close buttons, and the overlay
const showModalButtons = document.querySelectorAll('.show-modal');
const modals = document.querySelectorAll('.modal');
const closeModalButtons = document.querySelectorAll('.close-modal');
const overlay = document.querySelector('.overlay');
const mainmodel = document.querySelector('.main-modal');

// Function to open a modal window based on its index in the 'modals' array.
const OpenModal = modalIndex => {
  // Remove the 'hidden' class from the specific modal at the given index.
  modals[modalIndex].classList.remove('hidden');

  // Remove the 'hidden' class from the overlay element.
  overlay.classList.remove('hidden');

  // Set the 'display' property of 'mainmodel' to 'none', effectively hiding it.
  mainmodel.style.display = 'none';
};

const closeModal = () => {
  modals.forEach(modal => modal.classList.add('hidden'));
  overlay.classList.add('hidden');
};

// Attaches event listeners to buttons that will show modals when clicked.
// Assumes that buttons to show modals have a common class and are differentiated by their order.
showModalButtons.forEach((button, index) => {
  button.addEventListener('click', () => OpenModal(index));
});

// Attaches event listeners to buttons that close modals when clicked.
// Assumes that buttons to close modals have a common class.
closeModalButtons.forEach(button => {
  button.addEventListener('click', closeModal);
});

// Listen for keydown events across the entire document.
document.addEventListener('keydown', event => {
  // Check if one of the specific keys ('Escape', 'Delete', 'Backspace') is pressed
  // and also check that the overlay is not hidden at the moment.
  if (
    (event.key === 'Escape' ||
      event.key === 'Delete' ||
      event.key === 'Backspace') &&
    !overlay.classList.contains('hidden')
  ) {
    // Call the closeModal function to hide the modal and the overlay,
    closeModal();
  }
  //var clicked = false;
document.getElementById('button').addEventListener("click", function() {
    clicked = true;
});
});
*/
/////////////////////////new upgrdae///////////////////////
const showModalButtons = document.querySelectorAll('.show-modal');
const modals = document.querySelectorAll('.modal');
const closeModalButtons = document.querySelectorAll('.close-modal');
const overlay = document.querySelector('.overlay');
const mainmodel = document.querySelector('.main-modal');
////modalindex rturn modals each index i mean from 0 .1.2
const showModel = modalIndex => {
  // Hide all modals first to ensure only the selected one is shown
  modals.forEach((modal, index) => {
    if (index === modalIndex) {
      //modalindex mean each modal has number and separate
      modal.classList.remove('hidden'); // Show the selected modal
      mainmodel.style.display = 'none'; // Hide the main modal content
    } else {
      modal.classList.add('hidden'); // Ensure other modals are hidden..
      //The else block ensures that any modal not currently needed is hidden,
    }
  });
};
const closeModle = () => {
  modals.forEach(modal => modal.classList.add('hidden'));
  mainmodel.style.display = 'block';
};
showModalButtons.forEach((button, index) => {
  button.addEventListener('click', () => showModel(index));
});
closeModalButtons.forEach(button => {
  button.addEventListener('click', closeModle);
});
