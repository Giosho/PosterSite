// Function to open the modal and display the clicked image
function openModal(src) {
    const modal = document.getElementById("myModal");
    const img = document.getElementById("img01");
    img.src = src; // Set the source of the modal image
    modal.style.display = "block"; // Show the modal
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none"; // Hide the modal
}

// Close the modal when the user clicks anywhere outside the image
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
};

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
