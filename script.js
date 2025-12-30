// Get the modal, the buttons that open it, and the element that closes it
const modal = document.getElementById('comingSoonModal');
const bioButton = document.getElementById('bio-link');
const portfolioButton = document.getElementById('portfolio-link');
const closeButton = document.querySelector('.close-button');

// Function to open the modal
function openModal(event) {
    event.preventDefault(); // Stop the link from navigating
    modal.style.display = 'flex'; // Use flex to center the modal content
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// When the user clicks on the Bio Data or Portfolio button, open the modal
bioButton.addEventListener('click', openModal);
portfolioButton.addEventListener('click', openModal);

// When the user clicks on (x), close the modal
closeButton.addEventListener('click', closeModal);

// When the user clicks anywhere outside of the modal content, close it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});