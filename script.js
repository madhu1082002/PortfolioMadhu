let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// Function to open the popup
function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
}

// Function to close the popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Event listeners for the social media links
document.querySelector('.linkedin').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link action
    openPopup('linkedin-popup');
});

document.querySelector('.instagram').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link action
    openPopup('instagram-popup');
});

document.querySelector('.twitter').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link action
    openPopup('twitter-popup');
});

function toggleReadMore(event) {
    event.preventDefault(); // Prevents the default link behavior

    const moreText = document.getElementById("more-text");
    const btn = event.target;

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btn.textContent = "Read Less"; // Changes button text to "Read Less"
    } else {
        moreText.style.display = "none";
        btn.textContent = "Read More"; // Changes button text back to "Read More"
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    slides.forEach((img) => {
        img.addEventListener('click', function () {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src; // Get the clicked image source
            captionText.innerHTML = this.alt; // Get the image alt text for caption
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.style.display = "none"; // Hide lightbox
    });

    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none"; // Hide lightbox if clicked outside of the image
        }
    });
});

function toggleProjectDetails() {
    const projectDetails = document.getElementById("projectDetails");
    if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
        projectDetails.style.display = "block";
    } else {
        projectDetails.style.display = "none";
    }
}

